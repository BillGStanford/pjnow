// short-singularity/src/utils/date.ts

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function formatDateISO(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString();
}

export function getReadingTime(content: any[]): number {
  const wordsPerMinute = 200;
  const textContent = content
    .filter(block => block.type === 'paragraph' || block.type === 'heading' || block.type === 'quote')
    .map(block => block.text || '')
    .join(' ');
  
  const wordCount = textContent.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function getCurrentDate(): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());
}