import { FC } from 'react'
import { useQueryClient } from 'react-query'

import { CountryDetailQuery, useCountryDetailQuery } from './graphql/CountryDetail.generated'

import ModalDialog, { IModalDialogProps } from 'components/ModalDialog'
import { ValuePairContainer, ValuePairLabel, ValuePairValue } from 'components/styled'
import { CountryListQuery } from 'pages/CountryList/graphql/CountryList.generated'
import Button from 'components/Button'

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
      initialData: () => {
        return queryClient
          .getQueryData<CountryListQuery>('CountryList')
          ?.countries.find((country) => country.code === countryCode) as Partial<
          Pick<CountryDetailQuery, 'country'>
        >
      },
      onError: (err) => {
        console.error('[CountryDetailDialog::useCountryDetailQuery]', err)
      },
    }
  )

  const title = data
    ? `${data.country?.emoji} ${data.country?.name} (${data.country?.native})`
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
          <ValuePairValue>{data?.country?.capital ?? '-'}</ValuePairValue>
        </ValuePairContainer>
        <ValuePairContainer>
          <ValuePairLabel>Continent: </ValuePairLabel>
          <ValuePairValue>{data?.country?.continent.name ?? '-'}</ValuePairValue>
        </ValuePairContainer>
        <ValuePairContainer>
          <ValuePairLabel>Currency: </ValuePairLabel>
          <ValuePairValue>{data?.country?.currency ?? '-'}</ValuePairValue>
        </ValuePairContainer>
        <ValuePairContainer>
          <ValuePairLabel>Phone number prefix: </ValuePairLabel>
          <ValuePairValue>+{data?.country?.phone ?? '-'}</ValuePairValue>
        </ValuePairContainer>
        <ValuePairContainer>
          <ValuePairLabel>Spoken languages: </ValuePairLabel>
          <ValuePairValue>
            {data?.country?.languages
              .map((language) => `${language.name} (${language.native})`)
              .join(', ') ?? '-'}
          </ValuePairValue>
        </ValuePairContainer>
      </>
    </ModalDialog>
  )
}

export default CountryDetailDialog
