/** Cor da interface do navegador (barra de endereço) por tema. Espelha --background em globals.css. */
export const THEME_COLORS = { light: '#fafaf9', dark: '#0c0a09' } as const

/** Atualiza as <meta name="theme-color"> para o tema escolhido no site, não o do sistema. */
export function applyThemeColor(isDark: boolean) {
  const color = isDark ? THEME_COLORS.dark : THEME_COLORS.light
  document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
    meta.content = color
  })
}
