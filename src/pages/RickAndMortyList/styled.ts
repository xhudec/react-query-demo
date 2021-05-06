import styled from 'styled-components/macro'

interface IPaginationControlButtonProps {
  position: 'right' | 'left'
}

const PaginationControlButton = styled.button<IPaginationControlButtonProps>`
  position: fixed;
  top: 50%;
  ${(p) => `${p.position}: 200px;`}

  border: none;
  cursor: pointer;
  color: var(--color-gray-500);
  background-color: transparent;

  transition: color 200ms ease-in-out, transform 200ms ease-in-out;

  &:hover {
    color: var(--color-black);
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.1);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--color-gray-300);
    transform: none;
  }
`

export { PaginationControlButton }
