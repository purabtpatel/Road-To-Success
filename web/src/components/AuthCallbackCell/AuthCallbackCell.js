export const QUERY = gql`
  query setUserTokens($code: String!) {
    authCallback(code: $code) {
      result
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div></div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({authCallback}) => {
  alert(`result=${authCallback.result}`)
  window.location.href = window.location.origin
  return <div></div>
}

