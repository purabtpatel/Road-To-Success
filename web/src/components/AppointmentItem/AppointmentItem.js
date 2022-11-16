const AppointmentItem = () => {
  //mock data
  const appointments = [{ id: 42, title: 'Finish HW', Duration: '10 mins' }]

  const titlefeed = appointments.map((appointment) => (
    <h2 key={appointment.id}> Title: {appointment.title}</h2>
  ))
  const duration = appointments.map((appointment) => (
    <h2 key={appointment.id}> Duration: {appointment.Duration}</h2>
  ))

  return (
    <div className="appointmentItem">
      <h2 className="innertext title ">{titlefeed}</h2>

      <p className="innertext duration">{duration}</p>
      <div className="mini-horizontal-bar"></div>
    </div>
  )
}

export default AppointmentItem
