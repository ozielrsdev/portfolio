export interface Project {
  slug: string
  name: string
  /** Uma frase: o que o projeto é. */
  summary: string
  problem: string
  solution: string
  contribution: string
  role: 'Solo' | 'Equipe'
  stack: string[]
  /** Resultado concreto; omitido quando não houver dado real. */
  result?: string
  links: {
    demo?: string
    repo?: string
  }
}
