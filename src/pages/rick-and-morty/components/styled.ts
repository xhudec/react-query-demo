import styled from 'styled-components/macro'

interface IPaginationControlButtonProps {
  position: 'right' | 'left'
}

const PaginationControlButton = styled.button<IPaginationControlButtonProps>`
  position: fixed;
  top: 80%;
  height: 80px;
  width: 80px;
  ${(p) => `${p.position}: 32px;`}

  padding: 0;
  border: none;
  cursor: pointer;
  color: var(--color-gray-500);
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
  border-radius: 50%;

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

  @media screen and (min-width: 1320px) {
    top: 50%;
    ${(p) => `${p.position}: 128px;`}
    box-shadow: none;
  }
`

export { PaginationControlButton }
