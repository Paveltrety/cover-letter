import type { IUserInfo } from "@/types/common";

export const normalizeResult = (coverLetter: string, data: IUserInfo): string => {
  const contacts: string[] = [];

  if (data.telegram?.trim()) {
    contacts.push(`Telegram: ${data.telegram}`);
  }

  if (data.github?.trim()) {
    contacts.push(`GitHub: ${data.github}`);
  }

  if (data.site?.trim()) {
    contacts.push(`Сайт: ${data.site}`);
  }

  // если контактов нет — возвращаем письмо как есть
  if (!contacts.length) return coverLetter;

  return `${coverLetter}

Контакты:
${contacts.join('\n')}`;
};
