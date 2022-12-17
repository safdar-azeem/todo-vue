export const themeStorage = {
  get: () => {
    const theme = localStorage.getItem('theme')
    return theme ? JSON.parse(theme) : 'light'
  },
  set: (theme: string) => {
    localStorage.setItem('theme', JSON.stringify(theme))
  },
}
