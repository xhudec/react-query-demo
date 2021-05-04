import { Dispatch, FC } from 'react'

import CountryTag from './components/CountryTag'
import { CountryListContainer } from './styled'

import { CountryListQuery } from 'pages/CountryList/graphql/CountryList.generated'
import { TDetailDialogAction } from 'pages/CountryList/hooks/useDetailDialog'

export interface ICountryListViewProps {
  queryData: CountryListQuery
  dispatch: Dispatch<TDetailDialogAction>
}

const CountryListView: FC<ICountryListViewProps> = ({ queryData, dispatch }) => {
  return (
    <CountryListContainer>
      {queryData.countries.map((country) => (
        <li key={country.code}>
          <CountryTag
            code={country.code}
            flag={country.emoji}
            name={country.name}
            dispatch={dispatch}
          />
        </li>
      ))}
    </CountryListContainer>
  )
}

export default CountryListView
