import z from "zod"

const envSchema = z.object({
  VITE_GITHUB_URL: z.string().url(),
})

// Lê só as chaves usadas: passar import.meta.env inteiro faz o Vite embutir
// todas as variáveis VITE_ do .env no bundle público.
export const env = envSchema.parse({
  VITE_GITHUB_URL: import.meta.env.VITE_GITHUB_URL,
})
