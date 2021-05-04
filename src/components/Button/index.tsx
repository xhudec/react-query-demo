import { ButtonHTMLAttributes, FC } from 'react'
import { Link } from 'react-router-dom'

import { BaseButton } from './styled'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
}

const Button: FC<IButtonProps> = ({ href, children, ...delegated }) => {
  return (
    <BaseButton type="button" as={href ? Link : 'button'} to={href} {...delegated}>
      {children}
    </BaseButton>
  )
}

export default Button
