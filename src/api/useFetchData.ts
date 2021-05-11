import env from 'config/env'

const useFetchData = <TData, TVariables>(query: string): (() => Promise<TData>) => {
  // it is safe to call React Hooks here.
  // const { token } = React.useContext(AuthContext)
  const token = 'superSecureToken'

  return async (variables?: TVariables) => {
    const res = await fetch(env.countryApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0] || 'Error...'
      throw new Error(message)
    }

    return json.data
  }
}

export { useFetchData }
