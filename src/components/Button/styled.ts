import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components/macro'

interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string
}

const BaseButton = styled.button<IBaseButtonProps>`
  --color: var(--color-white);
  --bg-color: var(--color-black);
  --hover-bg-color: var(--color-gray-700);

  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid transparent;
  outline-offset: 4px;

  font-size: 1rem;
  line-height: 1.25;
  font-weight: 600;
  text-transform: uppercase;

  color: var(--color);
  background-color: var(--bg-color);

  will-change: color background-color border-color;
  transition: color 200ms ease-in-out, background-color 200ms ease-in-out,
    border-color 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--hover-bg-color);
  }
`

export { BaseButton }
