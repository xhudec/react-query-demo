import { FC } from 'react'

import { useContinentListQuery } from './graphql/ContinentList.generated'

import RadioGroup from 'components/RadioGroup'
import RadioInputField from 'components/RadioInputField'

export interface ICountryFilterProps {
  filterValue: string
  setFilterValue: (value: string) => void
}

const CountryFilter: FC<ICountryFilterProps> = ({ filterValue, setFilterValue }) => {
  const { data, isFetching } = useContinentListQuery(undefined, {
    staleTime: Infinity,
    onError: (err) => {
      console.error('[CountryFilter::useContinentListQuery]', err)
    },
  })

  return (
    <div>
      <RadioGroup label={`Continents${isFetching ? '...' : ''}`}>
        {data?.continents.map((continent) => (
          <RadioInputField
            key={continent.code}
            label={continent.name}
            checked={filterValue === continent.code}
            onChange={() => setFilterValue(continent.code)}
          />
        ))}
      </RadioGroup>
    </div>
  )
}

export default CountryFilter
