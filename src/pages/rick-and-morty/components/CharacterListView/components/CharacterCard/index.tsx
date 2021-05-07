import { FC } from 'react'

import { CardContainer, CardImage, CardBody, CharacterName } from './styled'

export interface ICharacterCardProps {
  name: string
  imgSrc: string
}

const CharacterCard: FC<ICharacterCardProps> = ({ name, imgSrc }) => {
  return (
    <CardContainer>
      <CardImage width={300} loading="lazy" src={imgSrc} alt={name} />
      <CardBody>
        <CharacterName>{name}</CharacterName>
      </CardBody>
    </CardContainer>
  )
}

export default CharacterCard
