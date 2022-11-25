export const QUERY = gql`
  query calendar_demo($start: String!, $end: String!) {
    getEvents(start: $start, end: $end) {
      events {
        id
        summary
        description
        start
        end
      }
    }
  }
`

const reloadPage = () => {
  setTimeout(()=>{
    window.location.href = window.location.origin + window.location.pathname;
  }, 5000);
  return "Please try again. Reloading page."
}

export const Loading = () => <div></div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message} {reloadPage()}</div>
)

export const Success = ({ getEvents }) => {
  window.history.replaceState(null, null, window.location.origin + window.location.pathname)
  console.log(getEvents);
  return (
    <>
      <ul style={{display: "flex", flexWrap: "wrap", padding: "0px 0px 10px 10px"}}>
        {getEvents.events.map((item) => {
          const start = new Date(item.start);
          const end = new Date(item.end);
          return <li style={{transform: "skewX(-10deg)", whiteSpace: "pre", margin: "10px 10px 0px 0px", flex: "1 1 180px", backgroundColor: "#141618"}} key={item.id}>{`${item.summary}\n${start.toLocaleString()}\n${end.toLocaleString()}`}</li>
        })}
      </ul>
    </>
  )
}