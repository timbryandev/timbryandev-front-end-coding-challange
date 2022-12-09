import { FormEvent, useContext, useRef } from 'react'
import Context from '../../store/Context'
import { User } from '../../types'
import { UpdateUserFormProps } from './types'
import { updateUser } from '../../network/users/updateUser'

import './UpdateUserForm.css'

function UpdateUserForm ({
  onSuccess = () => {},
  user
}: UpdateUserFormProps): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null)

  const { setContext } = useContext(Context)

  async function handleSubmit (evt: FormEvent): Promise<void> {
    const form = formRef.current
    evt.preventDefault()

    if (form === null) return

    const formData = new FormData(form)
    const firstName = (formData.get('firstName') as string) ?? user.firstName
    const lastName = (formData.get('lastName') as string) ?? user.lastName
    const email = (formData.get('email') as string) ?? user.email

    const newUserData: User = { ...user, firstName, lastName, email }

    try {
      await updateUser(newUserData)

      setContext(prev => {
        const users = [...(prev.users as User[])]

        // Update the user in-place - prevents moving the new user to the bottom of the table
        const index = users.findIndex(({ id }) => id === user.id)
        users[index] = newUserData

        return {
          ...prev,
          users
        }
      })

      onSuccess()
    } catch (err) {
      // TODO: handle error in the UI
      console.error(err)
    }
  }

  return (
    <form
      ref={formRef}
      className='update-user'
      onSubmit={evt => {
        void handleSubmit(evt)
      }}
    >
      <div className='update-user__row'>
        <label htmlFor='firstName'>First name</label>
        <input
          type='text'
          name='firstName'
          id='firstName'
          defaultValue={user.firstName}
          placeholder={user.firstName}
        />
      </div>
      <div className='update-user__row'>
        <label htmlFor='lastName'>Last name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          defaultValue={user.lastName}
          placeholder={user.lastName}
        />
      </div>
      <div className='update-user__row'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          defaultValue={user.email}
          placeholder={user.email}
        />
      </div>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default UpdateUserForm
