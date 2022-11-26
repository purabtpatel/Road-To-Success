export const QUERY = gql`
  query setUserTokens($code: String!) {
    authCallback(code: $code) {
      result
    }
  }
`

export const Loading = () => {
  return <div>Loading...</div>
}

export const Empty = () => {
	return <div></div>
}

export const Failure = ({ error }) => {
  return <div style={{ color: 'red' }}>Error: {error?.message}</div>
}


export const Success = ({authCallback}) => {
  //alert(`authCallbackCell: result=${authCallback.result}`)
  window.location.href = window.location.origin
  return <div></div>
}

