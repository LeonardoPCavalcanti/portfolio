export type Lang = 'pt' | 'en';

/** Todo texto visível do site existe nos dois idiomas. */
export type Localized<T = string> = { pt: T; en: T };
