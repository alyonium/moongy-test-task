export const removeHtmlTags = (summary: string) => summary.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g, '');
