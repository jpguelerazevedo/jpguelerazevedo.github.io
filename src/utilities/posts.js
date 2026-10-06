// Transforma um título em slug para a URL (sempre a partir do título em português)
export const slugify = (text) => text.toString().toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')

export const postUrl = (p) => `/post/${slugify(p.title.pt)}`

// '2026-03-16' -> 'Mar 2026'
export function shortDate(iso, language) {
    const date = new Date(`${iso}T00:00:00Z`)
    const month = new Intl.DateTimeFormat(language === 'pt' ? 'pt-BR' : 'en-US', { month: 'short', timeZone: 'UTC' })
        .format(date).replace('.', '')
    return `${month.charAt(0).toUpperCase()}${month.slice(1)} ${date.getUTCFullYear()}`
}

// Tempo de leitura estimado em minutos (~200 palavras por minuto)
export function readingTime(html) {
    const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length
    return Math.max(1, Math.round(words / 200))
}
