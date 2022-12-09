import { UserTableProps } from './types'
import './UserTable.css'

function UserTable ({ users }: UserTableProps): JSX.Element {
  function handleEditUser (id: number): void {
    console.log('TODO: Implement handleEditUser', { id })
  }

  return (
    <table className='users'>
      <thead className='users__head'>
        <tr>
          <th>Avatar</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='users__body'>
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
      </tbody>
      <tfoot>
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
