export type Translation = {
  $?: string;
  [key: string]: string | Translation | undefined;
};

export function createTranslator(translations: Record<string, Translation>[]) {
  return function translate(key: string) {};
}
