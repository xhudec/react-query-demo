import styled from 'styled-components'

const PageContent = styled.main`
  max-width: 1080px;
  margin: auto;
`

const Heading = styled.h1`
  font-size: 2rem;
  line-height: 1.5;
  font-weight: bold;

  margin-bottom: 16px;
`

const ValuePairContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  margin: 8px 0;
  border-bottom: 1px solid lightgray;

  &:last-of-type {
    border: none;
  }
`

const ValuePairLabel = styled.span`
  color: darkgray;
`

const ValuePairValue = styled.span`
  font-weight: 700;
`

export { PageContent, Heading, ValuePairContainer, ValuePairLabel, ValuePairValue }