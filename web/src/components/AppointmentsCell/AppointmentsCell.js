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
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ getEvents }) => {
  React.useEffect(() => {
    const elements = document.getElementsByClassName('animateIn')
    for(const element of elements){
      //element.animate([{transform: 'scale(0.01)'},{transform: 'scale(1.0) skewX(-10deg)'}], {duration: 1000, iterations: 1})
      element.style.transition = `all ${Math.random()}s cubic-bezier(0.76, 0.75, 0.06, 1.16)`
      element.style.transform = "scale(1) skewX(-10deg)"
    }
  }, []);
  //window.history.replaceState(null, null, window.location.origin + window.location.pathname)
  console.log(getEvents);
  return (
    <>
      <ul style={{margin: "0px -21px 0px -21px", display: "flex", flexWrap: "wrap", padding: "0px 0px 10px 10px", backgroundColor: "transparent"}}>
        {getEvents.events.map((item) => {
          const start = new Date(item.start);
          const end = new Date(item.end);
          return <li className="animateIn" style={{transform: "skewX(-10deg) scale(0.001)", whiteSpace: "pre", margin: "10px 10px 0px 0px", flex: "1 1 180px", backgroundColor: "#141618"}} key={item.id}>{`${item.summary}\n${start.toLocaleString()}\n${end.toLocaleString()}`}</li>
        })}
      </ul>
    </>
  )
}
