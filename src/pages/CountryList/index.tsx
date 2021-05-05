import { FC, useState } from 'react'

import CountryFilter from './components/CountryFilter'
import CountryListView from './components/CountryListView'
import CountryDetailDialog from './components/CountryDetailDialog'
import useDetailDialog from './hooks/useDetailDialog'
import { useCountryListQuery } from './graphql/CountryList.generated'

import Header from 'components/Header'
import { CustomLink, Heading, PageContent } from 'components/styled'
import Loading from 'components/Loading'

const CountryListPage: FC = () => {
  const [selectedContinent, setSelectedContinent] = useState('EU')
  const [state, dispatch] = useDetailDialog()

  const { data, status, isFetching } = useCountryListQuery(
    { filter: { continent: { eq: selectedContinent } } },
    {
      staleTime: Infinity,
      onError: (err) => {
        console.error('[CountryListPage::useCountryListQuery]', err)
      },
    }
  )

  return (
    <div>
      <Header>
        <CustomLink to="/">Example App</CustomLink>
      </Header>

      <PageContent>
        <Heading>Country List{isFetching ? '...' : ''}</Heading>

        <CountryFilter filterValue={selectedContinent} setFilterValue={setSelectedContinent} />

        {status === 'loading' ? <Loading /> : null}
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
