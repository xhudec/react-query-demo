import styled from 'styled-components/macro'

const CharacterList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  align-items: stretch;

  margin-bottom: 48px;

  @media screen and (min-width: 764px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1680px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export { CharacterList }
