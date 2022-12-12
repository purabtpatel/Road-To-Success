/* eslint-disable prettier/prettier */
import { render, screen } from '@redwoodjs/testing/web'

import AppointmentItem from './AppointmentItem'

describe('AppointmentItem', () => {
  const appointment = { id: 1, title: 'Title', startTime: '1:00PM', duration: '1 Hour'}
  it('renders successfully', () => {
    expect(() => {
      render(<AppointmentItem />)
    }).not.toThrow()
  })
  it('Displays info in monthly View', () => {
    render(
      <AppointmentItem
        id={appointment.id}
        title={appointment.title}
        startTime={appointment.startTime}
        duration={appointment.duration}
        viewType={'monthly'}
      />
    )
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('1:00PM')).toBeInTheDocument()
    expect(screen.getByText('1 Hour')).toBeInTheDocument()
  })
  it('Displays info in weekly View', () => {
    render(
      <AppointmentItem
        id={appointment.id}
        title={appointment.title}
        startTime={appointment.startTime}
        duration={appointment.duration}
        viewType={'weekly'}
      />
    )
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('1:00PM')).toBeInTheDocument()
    expect(screen.getByText('1 Hour')).toBeInTheDocument()
  })
  it('Displays info in Daily View', () => {
    render(
      <AppointmentItem
        id={appointment.id}
        title={appointment.title}
        startTime={appointment.startTime}
        duration={appointment.duration}
        viewType={'daily'}
      />
    )
    expect(screen.queryByText('1')).not.toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('1:00PM')).toBeInTheDocument()
    expect(screen.getByText('1 Hour')).toBeInTheDocument()
  })
  it('Renders View Error Correctly', () => {
    render(
      <AppointmentItem
        id={appointment.id}
        title={appointment.title}
        startTime={appointment.startTime}
        duration={appointment.duration}
        viewType={''}
      />
    )
    expect(screen.queryByText('1')).not.toBeInTheDocument()
    expect(screen.queryByText('Title')).not.toBeInTheDocument()
    expect(screen.queryByText('1:00PM')).not.toBeInTheDocument()
    expect(screen.queryByText('1 Hour')).not.toBeInTheDocument()
    expect(screen.getByText('ViewType missing')).toBeInTheDocument()
  })
})