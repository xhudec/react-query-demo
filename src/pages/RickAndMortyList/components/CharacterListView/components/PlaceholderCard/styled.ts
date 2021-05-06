import styled from 'styled-components/macro'

import { CardContainer } from '../CharacterCard/styled'

const PlaceholderCardContainer = styled(CardContainer)`
  display: grid;
  place-items: center;
`

const IconContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
`

export { PlaceholderCardContainer, IconContainer }
