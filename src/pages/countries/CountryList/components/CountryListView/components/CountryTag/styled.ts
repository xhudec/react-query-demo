import styled from 'styled-components/macro'

const CountryTagContainer = styled.button`
  display: block;
  width: 100%;
  border: 1px solid var(--color-gray-500);
  border-radius: 8px;
  padding: 4px 8px;
  background-color: var(--color-white);
  cursor: pointer;

  transition: border-color 200ms ease-in-out, background-color 200ms ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--color-gray-100);
    border-color: var(--color-gray-700);
  }

  &:focus {
    outline-offset: 4px;
  }

  &:active {
    background-color: var(--color-gray-300);
  }
`

const CountryTagFlagContainer = styled.div`
  font-size: 2rem;
`

const CountryTagName = styled.div`
  font-size: 1.125rem;
`

export { CountryTagContainer, CountryTagFlagContainer, CountryTagName }
