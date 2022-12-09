// import { useContext } from 'react'
// import Context from '../../store/Context'
import './UserTable.css'
import useUsers from '../../hooks/useUsers'
const COLUMN_HEADERS = ['Avatar', 'First name', 'Last name', 'Email', 'Action']
function UserTable (): JSX.Element {
  // const { context, setContext } = useContext(Context)
  const users = useUsers()

  function handleEditUser (id: number): void {
    console.log('TODO: Implement handleEditUser', { id })
  }

  function renderTableBody (): JSX.Element {
    if (!Array.isArray(users)) {
      return (
        <tr>
          <td colSpan={COLUMN_HEADERS.length}>
            <div className='error'>{users}</div>
          </td>
        </tr>
      )
    }

    if (users.length === 0) {
      return (
        <tr>
          <td colSpan={COLUMN_HEADERS.length}>
            <div className='loading'>Loading...</div>
          </td>
        </tr>
      )
    }

    return (
      <>
        {users.map(({ avatar, email, firstName, id, lastName }) => (
          <tr key={email}>
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
              <button onClick={() => handleEditUser(id)}>Edit Details</button>
            </td>
          </tr>
        ))}
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
