export const removeHtmlTags = (summary: string | null) => {
  if (!summary) {
    return '';
  }
  return summary.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>|&amp;/g, '');
};
