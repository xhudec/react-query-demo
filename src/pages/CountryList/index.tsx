import { FC, useState } from 'react'

import CountryFilter from './components/CountryFilter'
import CountryListView from './components/CountryListView'
import CountryDetailDialog from './components/CountryDetailDialog'
import useDetailDialog from './hooks/useDetailDialog'
import { useCountryListQuery } from './graphql/CountryList.generated'

import Header from 'components/Header'
import { Heading, PageContent } from 'components/styled'

const CountryListPage: FC = () => {
  const [selectedContinent, setSelectedContinent] = useState('EU')
  const [state, dispatch] = useDetailDialog()

  const { data, status, isFetching } = useCountryListQuery(
    { filter: { continent: { eq: selectedContinent } } },
    {
      onError: (err) => {
        console.error('[CountryListPage::useCountryListQuery]', err)
      },
    }
  )

  return (
    <div>
      <Header>Example App</Header>

      <PageContent>
        <Heading>Country List{isFetching ? '...' : ''}</Heading>

        <CountryFilter filterValue={selectedContinent} setFilterValue={setSelectedContinent} />

        {status === 'loading' ? <p>Loading...</p> : null}
        {status === 'success' && data ? (
          <CountryListView queryData={data} dispatch={dispatch} />
        ) : null}

        <CountryDetailDialog
          isOpen={state.isOpen}
          countryCode={state.countryCode}
          onDismiss={() => dispatch({ type: 'CLOSE_DIALOG' })}
        />
      </PageContent>
    </div>
  )
}

export default CountryListPage
