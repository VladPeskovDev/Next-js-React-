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
    description: 'Услуги адвоката по уголовным делам в Москве: защита на следствии и в суде, обжалование, консультации, срочный выезд при задержании. От 40 000 ₽.',
    enabled: true,
  },
  situatsii: {
    title: 'Ситуации',
    description: 'Срочный адвокат в Москве 24/7 при задержании, обыске, допросе. Выезд за 30-40 минут. Что делать до приезда защитника.',
    enabled: true,
  },
  blog: {
    title: 'Блог',
    description: 'Блог адвоката по уголовным делам: разбор судебной практики, свежие изменения законодательства, разъяснения статей УК РФ и пошаговые инструкции для клиентов.',
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
