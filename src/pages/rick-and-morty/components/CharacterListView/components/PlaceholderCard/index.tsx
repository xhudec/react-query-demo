import { FC } from 'react'

import { PlaceholderCardContainer, IconContainer } from './styled'

import Loading from 'components/Loading'

const PlaceholderCard: FC = () => {
  return (
    <PlaceholderCardContainer>
      <IconContainer>
        <Loading />
      </IconContainer>
    </PlaceholderCardContainer>
  )
}

export default PlaceholderCard
