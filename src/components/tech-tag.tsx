import { Badge } from '@/components/ui/badge'

/** Rótulo de tecnologia (React, Node.js...). Usa a variante `tech` do Badge para manter um único componente de selo. */
export function TechTag({ children }: { children: React.ReactNode }) {
  return <Badge variant="tech">{children}</Badge>
}
