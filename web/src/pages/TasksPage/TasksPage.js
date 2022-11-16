import {
  FieldError,
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_TASK = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`
const CREATE_USER = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const TasksPage = () => {
  console.log('hi')
  const [create] = useMutation(CREATE_TASK, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
    },
  })
  const [create2] = useMutation(CREATE_USER, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
    },
  })
  const onSubmit = (data) => {
    data.date = new Date()
    create({ variables: { input: data } })
  }
  const onSubmit2 = (data) => {
    create2({ variables: { input: data } })
  }
  return (
    <>
      <MetaTags title="Task" description="Task page" />

      <Toaster />
      <Form onSubmit={onSubmit2} config={{ mode: 'onBlur' }}>
        <Label name="firstName" errorClassName="error">
          First Name
        </Label>
        <TextField
          name="firstName"
          validation={{ required: false }}
          errorClassName="error"
        />
        <br></br>
        <Label name="lastName" errorClassName="error">
          Last Name
        </Label>
        <TextField
          name="lastName"
          validation={{ required: false }}
          errorClassName="error"
        />
        <br></br>
        <Submit>Save</Submit>
      </Form>
      <br></br>
      <br></br>
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="user_id" errorClassName="error">
          User ID
        </Label>
        <TextField
          type="number"
          name="user_id"
          validation={{ required: false }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />
        <br></br>
        <Label name="title" errorClassName="error">
          Title
        </Label>
        <TextField
          name="title"
          validation={{
            required: false,
          }}
          errorClassName="error"
        />
        <FieldError name="title" className="error" />
        <br></br>
        <Label name="details" errorClassName="error">
          details
        </Label>
        <TextAreaField
          name="details"
          validation={{ required: false }}
          errorClassName="error"
        />
        <FieldError name="details" className="error" />
        <br></br>
        <Label name="urgency" errorClassName="error">
          urgency
        </Label>
        <TextField
          type="number"
          name="urgency"
          validation={{ required: false }}
          errorClassName="error"
        />
        <FieldError name="urgency" className="error" />
        <br></br>
        <Label name="priority" errorClassName="error">
          priority
        </Label>
        <TextField
          type="number"
          name="priority"
          validation={{ required: false }}
          errorClassName="error"
        />
        <FieldError name="priority" className="error" />
        <br></br>
        <Label name="status_id" errorClassName="error">
          status
        </Label>
        <TextField
          type="number"
          name="status_id"
          validation={{ required: false }}
          errorClassName="error"
        />
        <FieldError name="status_id" className="error" />
        <br></br>
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default TasksPage
