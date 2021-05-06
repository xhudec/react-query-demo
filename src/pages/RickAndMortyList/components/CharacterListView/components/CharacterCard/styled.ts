import styled from 'styled-components/macro'

const CardContainer = styled.article`
  min-height: 300px;
  min-width: 250px;
  height: 100%;
  overflow: hidden;

  border: 1px solid var(--color-gray-300);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px;

  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
  }
`

const CardImage = styled.img`
  display: block;
  width: 100%;
`

const CardBody = styled.div`
  padding: 16px;
`

const CharacterName = styled.h2`
  font-size: 1.25rem;
`

export { CardContainer, CardImage, CardBody, CharacterName }
