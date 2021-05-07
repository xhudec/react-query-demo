import styled from 'styled-components/macro'

const CharacterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  align-items: stretch;

  margin-bottom: 48px;
`

export { CharacterList }
