export function formatDate(date: Date) {
  return date.toLocaleDateString('en-Us', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
