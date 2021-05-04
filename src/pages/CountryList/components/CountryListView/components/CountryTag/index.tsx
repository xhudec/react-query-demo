import { Dispatch, FC } from 'react'

import { CountryTagContainer, CountryTagFlagContainer, CountryTagName } from './styled'

import { TDetailDialogAction } from 'pages/CountryList/hooks/useDetailDialog'

export interface ICountryTagProps {
  code: string
  name: string
  flag: string
  dispatch: Dispatch<TDetailDialogAction>
}

const CountryTag: FC<ICountryTagProps> = ({ code, name, flag, dispatch }) => {
  return (
    <CountryTagContainer
      type="button"
      onClick={() => dispatch({ type: 'OPEN_DIALOG', payload: { countryCode: code } })}
    >
      <CountryTagFlagContainer>{flag}</CountryTagFlagContainer>
      <CountryTagName>{name}</CountryTagName>
    </CountryTagContainer>
  )
}

export default CountryTag
