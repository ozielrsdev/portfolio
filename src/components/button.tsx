import type { HtmlHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  className?: string
}

const buttonVariants = tv({
  base: 'btn hover:scale-110 inline-flex justify-center items-center gap-2 font-medium transition-all rounded py-1.5 px-2.5',

  variants: {
    variant: {
      primary:
        'border border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-white',
      secondary:
        'bg-fuchsia-400 text-white hover:border border-fuchsia-400 hover:text-fuchsia-400 hover:bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, className })} {...props} />
  )
}
