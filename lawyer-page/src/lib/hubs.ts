export type HubKey =
  | 'narkotiki'
  | 'moshennichestvo'
  | 'ekonomika'
  | 'situatsii'
  | 'sledstvie'
  | 'uslugi'
  | 'praktika'
  | 'blog';

export type HubConfig = {
  title: string;
  description: string;
  enabled: boolean;
};

export const HUBS: Record<HubKey, HubConfig> = {
  narkotiki: {
    title: 'Наркотики',
    description: 'Разборы статей УК о наркотиках: 228, 228.1, 229, 231, 232 — размеры, сроки, практика.',
    enabled: true,
  },
  moshennichestvo: {
    title: 'Мошенничество',
    description: 'Статьи 159, 187, 174, 174.1 УК РФ: P2P-арбитраж, дропперы, отмывание, кредитное мошенничество.',
    enabled: true,
  },
  uslugi: {
    title: 'Услуги',
    description: 'Услуги адвоката по уголовным делам в Москве: защита на следствии, в суде, обжалование.',
    enabled: true,
  },
  situatsii: {
    title: 'Ситуации',
    description: 'Что делать: задержание, обыск, допрос, повестка, блокировка счёта.',
    enabled: true,
  },
  blog: {
    title: 'Блог',
    description: 'Новости права, комментарии к свежей практике и изменениям законодательства.',
    enabled: true,
  },
  ekonomika: {
    title: 'Экономические',
    description: 'Присвоение, растрата, налоговые, банкротные, коммерческий подкуп, взятка.',
    enabled: false,
  },
  sledstvie: {
    title: 'Взгляд следствия',
    description: 'Как следователь принимает решения, логика меры пресечения, типичные ошибки следствия.',
    enabled: false,
  },
  praktika: {
    title: 'Практика',
    description: 'Обезличенные кейсы: фабула → действия → результат.',
    enabled: false,
  },
};

export const HUB_KEYS = Object.keys(HUBS) as HubKey[];

export const ENABLED_HUBS = HUB_KEYS.filter((k) => HUBS[k].enabled);

export function isHubKey(x: string): x is HubKey {
  return x in HUBS;
}

export function isEnabledHub(x: string): x is HubKey {
  return isHubKey(x) && HUBS[x].enabled;
}
