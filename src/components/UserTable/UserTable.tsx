import { UserTableProps } from './types'
import './UserTable.css'

function UserTable ({ users }: UserTableProps): JSX.Element {
  return (
    <table className="users">
      <thead className="users__head">
        <tr>
          <th>Avatar</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="users__body">
        <tr>
          <td>image</td>
          <td>Michael</td>
          <td>Lawson</td>
          <td>
            <a href='mailto:'>michael.lawson@reqres.in</a>
          </td>
          <td>Edit Details</td>
        </tr>
        <tr>
          <td>image</td>
          <td>Lindsay</td>
          <td>Ferguson</td>
          <td>
            <a href='mailto:'>lindsay.ferguson@reqres.in</a>
          </td>
          <td>Edit Details</td>
        </tr>
        <tr>
          <td>image</td>
          <td>Tobias</td>
          <td>Funke</td>
          <td>
            <a href='mailto:'>tobias.funke@reqres.in</a>
          </td>
          <td>Edit Details</td>
        </tr>
        <tr>
          <td>…</td>
          <td>…</td>
          <td>…</td>
          <td>…</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}

export default UserTable
