export type HubKey =
  | 'narkotiki'
  | 'moshennichestvo'
  | 'ekonomika'
  | 'srochnyj-vyezd'
  | 'sledstvie'
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
    description: 'Адвокат по наркотическим статьям в Москве: защита по ст. 228 и 228.1 УК РФ, переквалификация сбыта на хранение, срок ниже минимума, выезд при задержании 24/7.',
    enabled: true,
  },
  moshennichestvo: {
    title: 'Мошенничество',
    description: 'Адвокат по экономическим преступлениям в Москве: защита по ст. 159, 160, 187 УК РФ, предпринимателей и сотрудников, блокировки 115-ФЗ. Консультация юриста 24/7.',
    enabled: true,
  },
  'srochnyj-vyezd': {
    title: 'Срочный выезд 24/7',
    description: 'Срочный выезд адвоката по Москве круглосуточно: задержание, обыск, допрос. Адвокат по вызову приедет за 30–40 минут. Выезд от 25 000 ₽, звонок 24/7.',
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
