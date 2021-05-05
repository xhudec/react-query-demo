import { FC } from 'react'
import { useQueryClient } from 'react-query'

import { CountryDetailQuery, useCountryDetailQuery } from './graphql/CountryDetail.generated'

import ModalDialog, { IModalDialogProps } from 'components/ModalDialog'
import Button from 'components/Button'
import Loading from 'components/Loading'
import { ValuePairContainer, ValuePairLabel, ValuePairValue } from 'components/styled'

import { CountryListQuery } from 'pages/CountryList/graphql/CountryList.generated'

// TODO: move to some utils + make the icon size controllable
const renderValue = (value: string | null | undefined, isLoading: boolean, fallback = '-') => {
  if (value) return value

  return isLoading ? <Loading size={14} /> : fallback
}

export interface ICountryDetailDialogProps extends Pick<IModalDialogProps, 'isOpen' | 'onDismiss'> {
  countryCode: string | null
}

const CountryDetailDialog: FC<ICountryDetailDialogProps> = ({
  countryCode,
  onDismiss,
  ...delegated
}) => {
  const queryClient = useQueryClient()

  const { data, isFetching } = useCountryDetailQuery(
    { code: countryCode ?? '' },
    {
      enabled: Boolean(countryCode),
      staleTime: Infinity,
      placeholderData: () => {
        const cachedCountryListQueryKeys = queryClient
          .getQueryCache()
          .findAll('CountryList')
          .map((query) => query.queryKey)
        const countries = cachedCountryListQueryKeys.reduce<CountryListQuery['countries']>(
          (acc, queryKey) => {
            const countryList =
              queryClient.getQueryData<CountryListQuery>(queryKey)?.countries ?? []

            return [...acc, ...countryList]
          },
          []
        )

        const foundCountry = countries.find((country) => country.code === countryCode)
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const countryDetailQueryData = {
          country: foundCountry,
        } as CountryDetailQuery

        return foundCountry ? countryDetailQueryData : undefined
      },
      onError: (err) => {
        // eslint-disable-next-line no-console
        console.error('[CountryDetailDialog::useCountryDetailQuery]', err)
      },
    }
  )

  const title = data?.country
    ? `${data.country.emoji} ${data.country.name} (${data.country.native})`
    : 'Country Detail'

  return (
    <ModalDialog
      width={500}
      title={`${title}${isFetching ? '...' : ''}`}
      control={<Button onClick={onDismiss}>Close</Button>}
      {...delegated}
    >
      <>
        <ValuePairContainer>
          <ValuePairLabel>Capital City: </ValuePairLabel>
          <ValuePairValue>{renderValue(data?.country?.capital, isFetching)}</ValuePairValue>
        </ValuePairContainer>
        <ValuePairContainer>
          <ValuePairLabel>Continent: </ValuePairLabel>
          <ValuePairValue>{renderValue(data?.country?.continent?.name, isFetching)}</ValuePairValue>
        </ValuePairContainer>
        <ValuePairContainer>
          <ValuePairLabel>Currency: </ValuePairLabel>
          <ValuePairValue>{renderValue(data?.country?.currency, isFetching)}</ValuePairValue>
        </ValuePairContainer>
        <ValuePairContainer>
          <ValuePairLabel>Phone number prefix: </ValuePairLabel>
          <ValuePairValue>
            {renderValue(data?.country?.phone ? `+${data.country.phone}` : null, isFetching)}
          </ValuePairValue>
        </ValuePairContainer>
        <ValuePairContainer>
          <ValuePairLabel>Spoken languages: </ValuePairLabel>
          <ValuePairValue>
            {renderValue(
              data?.country?.languages
                ?.map((language) => `${language.name} (${language.native})`)
                .join(', '),
              isFetching
            )}
          </ValuePairValue>
        </ValuePairContainer>
      </>
    </ModalDialog>
  )
}

export default CountryDetailDialog
