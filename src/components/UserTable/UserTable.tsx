import { useContext } from 'react'
import { User } from '../../types'
import UpdateUserForm from '../UpdateUserForm'
import Context from '../../store/Context'
import useUsers from '../../hooks/useUsers'
import './UserTable.css'

const COLUMN_HEADERS = ['Avatar', 'First name', 'Last name', 'Email', 'Action']

function UserTable (): JSX.Element {
  const { setContext } = useContext(Context)

  const users = useUsers()

  function handleEditUser (user: User): void {
    function closeModal (): void {
      setContext(prev => ({
        ...prev,
        modal: {
          ...prev.modal,
          visible: false
        }
      }))
    }

    const content = <UpdateUserForm onSuccess={closeModal} user={user} />

    setContext(prev => ({
      ...prev,
      modal: {
        content,
        title: 'Edit Details',
        visible: true
      }
    }))
  }

  function renderTableBody (): JSX.Element {
    if (!Array.isArray(users)) {
      return (
        <tr className='users__row users__row--state'>
          <td colSpan={COLUMN_HEADERS.length} className='users__error'>
            {JSON.stringify(users)}
          </td>
        </tr>
      )
    }

    if (users.length === 0) {
      return (
        <tr className='users__row users__row--state'>
          <td colSpan={COLUMN_HEADERS.length} className='users__loading'>
            Loading users...
          </td>
        </tr>
      )
    }

    return (
      <>
        {users.map(user => {
          const { avatar, email, firstName, lastName } = user
          return (
            <tr key={email} className='users__row'>
              <td>
                <img
                  className='users__avatar'
                  src={avatar}
                  alt={`Avatar of ${firstName} ${lastName}`}
                />
              </td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>
                <a href={`mailto:${email}`}>{email}</a>
              </td>
              <td>
                <button onClick={() => handleEditUser(user)}>
                  Edit Details
                </button>
              </td>
            </tr>
          )
        })}
      </>
    )
  }

  return (
    <table className='users'>
      <thead className='users__head'>
        <tr>
          {COLUMN_HEADERS.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className='users__body'>{renderTableBody()}</tbody>
      <tfoot className='users__foot'>
        <tr>
          <td colSpan={5}>
            <p>[pagination will go here]</p>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default UserTable
