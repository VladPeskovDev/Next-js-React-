# Deployment — advokat-peskov.com

Полный контекст по деплою сайта. Читается сверху вниз. Для быстрого доступа к командам см. раздел [Cheatsheet](#cheatsheet).

---

## 1. Стек и цель

- **Проект:** статический сайт адвоката (Next.js 15 App Router, `output: 'export'`).
- **Домен:** `advokat-peskov.com`.
- **Хостинг:** свой VPS (IP `5.45.81.127`), Ubuntu, Nginx как отдающий сервер.
- **Деплой:** GitHub Actions по `push` в `main` → билд на runner → `rsync` статики на VPS.
- **Ручной деплой:** возможен как fallback (см. ниже).

---

## 2. Архитектура деплоя

```
┌─────────────┐  git push main   ┌──────────────────┐
│  локально   │─────────────────▶│  GitHub Actions  │
│  (mac)      │                  │  deploy.yml      │
└─────────────┘                  └────────┬─────────┘
                                          │  npm ci
                                          │  npm run build
                                          │  → out/ (статика)
                                          │
                                          │  rsync -avz --delete
                                          ▼
                                 ┌──────────────────┐
                                 │  VPS 5.45.81.127 │
                                 │  /var/www/site/  │◀── читает Nginx
                                 └──────────────────┘
                                          │
                                          ▼
                                 https://advokat-peskov.com
```

**Триггер деплоя:** push в `main`, только если менялось `lawyer-page/**` или сам `deploy.yml`. Правки в `README.md` или `docs/` не запускают деплой.

**Ручной запуск деплоя:** GitHub → вкладка `Actions` → workflow `Deploy static site` → кнопка `Run workflow`.

---

## 3. Что где лежит

### Локально (mac)

| Путь | Что |
|---|---|
| `~/.ssh/deploy_lawyer` | приватный SSH-ключ для деплоя (`ed25519`) |
| `~/.ssh/deploy_lawyer.pub` | публичный ключ (лежит на VPS в `authorized_keys`) |
| `Desktop/Next JS + React /Next-js-React-/` | корень репозитория |
| `<repo>/lawyer-page/` | сам Next.js-проект (build отсюда) |
| `<repo>/.github/workflows/deploy.yml` | CI/CD workflow |
| `<repo>/docs/` | доки (этот файл) |

### На VPS (`5.45.81.127`)

| Путь | Что |
|---|---|
| `/var/www/site/` | корень сайта — сюда rsync кладёт `out/` |
| `/etc/nginx/sites-available/advokat-peskov` | конфиг Nginx для домена *(создать при настройке)* |
| `/etc/nginx/sites-enabled/advokat-peskov` | симлинк на активный конфиг |
| `/etc/letsencrypt/live/advokat-peskov.com/` | SSL-сертификаты (после certbot) |
| `/var/log/nginx/access.log` | лог запросов |
| `/var/log/nginx/error.log` | лог ошибок Nginx |
| `~/.ssh/authorized_keys` (у юзера `deploy`) | публичный ключ `deploy_lawyer.pub` |

### На GitHub (Secrets)

`Settings → Secrets and variables → Actions`:

| Имя | Значение |
|---|---|
| `SSH_KEY` | содержимое `~/.ssh/deploy_lawyer` целиком (с `BEGIN`/`END` строками) |
| `SSH_HOST` | `5.45.81.127` |
| `SSH_USER` | `deploy` |

---

## 4. GitHub Actions workflow

Файл: `.github/workflows/deploy.yml`

Что делает:
1. Триггер — `push` в `main` (только если менялось `lawyer-page/**` или сам workflow) + ручной запуск через `workflow_dispatch`.
2. `concurrency: deploy-prod` — блокирует параллельные деплои.
3. `working-directory: lawyer-page` — все шаги внутри папки проекта.
4. Node 22 + кэш npm по `lawyer-page/package-lock.json`.
5. `npm ci` — чистая установка из lockfile.
6. `npm run build` с `SITE_URL=https://advokat-peskov.com` (нужно для `next-sitemap`).
7. `webfactory/ssh-agent@v0.9.0` — грузит приватный ключ из `SSH_KEY` в ssh-agent.
8. `ssh-keyscan` добавляет VPS в `known_hosts` (иначе SSH зависнет на "точно доверяем этому хосту?").
9. `rsync -avz --delete --exclude='.well-known' out/ deploy@VPS:/var/www/site/`.
   - `--exclude='.well-known'` **обязательно** — иначе `--delete` снесёт папку certbot и сломает автопродление SSL.

---

## 5. Nginx на VPS

### Установка (первичная)

```bash
apt update
apt install nginx -y
systemctl status nginx
```

После установки Nginx уже слушает 80 порт (дефолтная заглушка). Файрвол `ufw` должен разрешать `Nginx Full` (80+443) — см. раздел про firewall.

### Конфиг для сайта

Создать `/etc/nginx/sites-available/advokat-peskov`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name advokat-peskov.com www.advokat-peskov.com;

    root /var/www/site;
    index index.html;

    # Next.js static export создаёт .html файлы без расширения в URL
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Кэш для _next/ (файлы имеют хэши, кэшируем надолго)
    location /_next/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Certbot webroot challenge
    location /.well-known/acme-challenge/ {
        root /var/www/site;
    }
}
```

Активировать:
```bash
ln -s /etc/nginx/sites-available/advokat-peskov /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default   # убрать дефолтную заглушку
nginx -t                              # проверка синтаксиса
systemctl reload nginx
```

### SSL (Let's Encrypt через certbot)

```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d advokat-peskov.com -d www.advokat-peskov.com
```

Certbot сам поправит Nginx-конфиг под 443 + добавит редирект 80→443. Автопродление настраивается кроном автоматически.

**Проверить автопродление:**
```bash
certbot renew --dry-run
```

### Обслуживание Nginx

```bash
nginx -t                    # синтаксис конфига
systemctl reload nginx      # применить конфиг без прерывания соединений
systemctl restart nginx     # полный перезапуск
systemctl status nginx      # статус
journalctl -u nginx -n 50   # последние 50 строк лога systemd
tail -f /var/log/nginx/access.log   # прямой эфир запросов
tail -f /var/log/nginx/error.log    # только ошибки
```

---

## 6. Firewall (ufw)

Текущее состояние — открыты только SSH (22) и Nginx Full (80+443):

```bash
ufw status                  # посмотреть правила
ufw app list                # список доступных профилей
ufw allow 'Nginx Full'      # 80 + 443
ufw allow OpenSSH           # 22
ufw --force enable          # активация
```

**Открыть/закрыть порт при необходимости:**
```bash
ufw allow 3000              # открыть порт 3000
ufw status numbered         # список с номерами
ufw delete 3                # удалить правило №3
```

---

## 7. SSH-ключи

### Что как называется

- **Приватный** ключ живёт только на маке: `~/.ssh/deploy_lawyer` (**никогда не передавать**).
- **Публичный** ключ (`~/.ssh/deploy_lawyer.pub`) кладётся на VPS в `~/.ssh/authorized_keys` пользователя `deploy`.
- **В GitHub Secret `SSH_KEY`** — содержимое **приватного** ключа (Actions использует его чтобы подключиться к VPS).

### Проверить что публичный ключ на VPS

```bash
ssh -i ~/.ssh/deploy_lawyer deploy@5.45.81.127 "cat ~/.ssh/authorized_keys"
```

Должен вернуть строку, начинающуюся с `ssh-ed25519 AAAA...`.

### Проверить что подключение работает

```bash
ssh -i ~/.ssh/deploy_lawyer deploy@5.45.81.127 "whoami && pwd"
# ожидается: deploy /home/deploy
```

### Ротация ключа (если утёк / плановая замена)

1. Локально: `ssh-keygen -t ed25519 -f ~/.ssh/deploy_lawyer_new -C "deploy@advokat-peskov"`
2. Скопировать новый публичный на VPS:
   ```bash
   ssh-copy-id -i ~/.ssh/deploy_lawyer_new.pub deploy@5.45.81.127
   ```
3. Удалить старый ключ из `~/.ssh/authorized_keys` на VPS (открыть vim и убрать соответствующую строку).
4. Обновить GitHub Secret `SSH_KEY` содержимым нового `deploy_lawyer_new`.
5. Переименовать локально: `mv ~/.ssh/deploy_lawyer_new ~/.ssh/deploy_lawyer` (после подтверждения что новый ключ работает).

---

## 8. Ручной деплой (fallback)

Если Actions лёг или нужно срочно задеплоить с мака:

```bash
cd "/Users/vladislav/Desktop/Next JS + React /Next-js-React-/lawyer-page"
npm ci                      # чистая установка (или npm install если тестируешь новые зависимости)
npm run build               # создаёт out/
rsync -avz --delete --exclude='.well-known' \
  -e "ssh -i ~/.ssh/deploy_lawyer" \
  out/ deploy@5.45.81.127:/var/www/site/
```

**⚠️ Важно:** слэш в конце `out/` — это "перелей содержимое", без слэша — "положи саму папку". См. troubleshooting.

---

## 9. Cheatsheet

### Git-флоу (из корня репо)

```bash
cd "/Users/vladislav/Desktop/Next JS + React /Next-js-React-"
git status
git add .                   # или конкретные файлы
git commit -m "..."
git push                    # автоматически триггерит Actions если менялось lawyer-page/**
```

### Проверка деплоя (что реально выкатилось)

```bash
# 1. Статус Actions (в браузере)
# https://github.com/VladPeskovDev/<repo>/actions

# 2. Что сейчас на VPS
ssh -i ~/.ssh/deploy_lawyer deploy@5.45.81.127 "ls -la /var/www/site/ | head -20"

# 3. Время последнего изменения index.html на VPS
ssh -i ~/.ssh/deploy_lawyer deploy@5.45.81.127 "stat /var/www/site/index.html"

# 4. HTTP-проверка (что отдаёт сервер)
curl -I https://advokat-peskov.com
curl -sL https://advokat-peskov.com | head -30
```

### VPS — быстрая диагностика

```bash
ssh -i ~/.ssh/deploy_lawyer deploy@5.45.81.127

# оттуда:
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log
df -h /var/www/               # место на диске
free -h                       # память
```

---

## 10. Troubleshooting

| Симптом | Причина | Решение |
|---|---|---|
| Actions: `Load key: invalid format` | `SSH_KEY` секрет обрезан или без `BEGIN/END` строк | пересоздать секрет, скопировав `cat ~/.ssh/deploy_lawyer` целиком |
| Actions: `Permission denied (publickey)` | публичный ключ не в `authorized_keys` на VPS, или права не 600 | `ssh -i ~/.ssh/deploy_lawyer deploy@VPS` — проверить что заходит; если нет — `ssh-copy-id` заново |
| Actions: `Host key verification failed` | шаг `ssh-keyscan` не отработал | посмотреть логи шага "Trust VPS host key"; проверить что `SSH_HOST` правильный |
| Actions: билд успешен, но сайт не обновился | `rsync` прошёл в другую папку / Nginx смотрит в другой `root` | `stat /var/www/site/index.html` на VPS — свежий? если нет, глянуть путь в rsync-команде vs `root` в nginx-конфиге |
| Локально: `ENOENT: package.json` | запуск npm из корня репо, а не из `lawyer-page/` | `cd lawyer-page && npm run build` |
| Локально: `rsync out/: No such file` | не сделан `npm run build`, или запуск из корня, а `out/` в `lawyer-page/` | `cd lawyer-page` и `ls out/` — проверить |
| rsync создал `/var/www/site/out/` вместо файлов | слэш забыт: `rsync out server:...` вместо `rsync out/ server:...` | добавить слэш к источнику |
| Nginx: `502 Bad Gateway` | статический сайт — 502 быть не должно; значит конфиг ссылается на upstream/proxy | глянуть `/etc/nginx/sites-enabled/*` — должен быть только `try_files`, никаких `proxy_pass` |
| Nginx: `404` на всех страницах | `root` в конфиге неправильный, или в `/var/www/site/` пусто | `ls /var/www/site/` — должен быть `index.html`; `nginx -t && systemctl reload nginx` |
| Sitemap не обновился | не сработал `postbuild` хук `next-sitemap` | глянуть логи Actions на шаге "Build"; проверить что `next-sitemap.config.js` на месте |
| Certbot: `challenge failed` | rsync снёс `.well-known/`, или Nginx неправильно роутит `/.well-known/acme-challenge/` | проверить что `--exclude='.well-known'` есть в rsync; проверить `location /.well-known/` в Nginx-конфиге |

---

## 11. Порядок первого запуска CI/CD

1. ✅ Публичный ключ (`deploy_lawyer.pub`) на VPS в `~/.ssh/authorized_keys` у `deploy`.
2. ✅ `deploy@5.45.81.127` может писать в `/var/www/site/` (владелец папки — `deploy` или группа с правом записи).
3. ✅ Nginx установлен, слушает 80, `root /var/www/site;` в конфиге.
4. ✅ Firewall: `OpenSSH` + `Nginx Full` разрешены.
5. ✅ GitHub Secrets: `SSH_KEY`, `SSH_HOST`, `SSH_USER`.
6. ✅ Файл `.github/workflows/deploy.yml` в репо.
7. `git push origin main` (с изменением в `lawyer-page/**` или самом workflow).
8. Смотреть `Actions` во вкладке — должен зелёный чекмарк.
9. Открыть `http://<IP>` (пока без домена) или `https://advokat-peskov.com` (после DNS + SSL) — должна быть свежая версия сайта.

---

## 12. Дальше по плану

Смотри `PROJECT (1).md` в корне (в git не коммитится) — план M0-M12 по SEO и контенту. Ближайшие шаги после того как CI/CD заработает:
- Прикрутить домен `advokat-peskov.com` A-записью к IP VPS.
- Выпустить SSL через certbot.
- Подтвердить домен в Яндекс.Вебмастере и Google Search Console.
- Отправить sitemap: `https://advokat-peskov.com/sitemap.xml`.
