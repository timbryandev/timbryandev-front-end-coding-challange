import UserTable from './components/UserTable'

import './App.css'

function App (): JSX.Element {
  return (
    <div className='App'>
      <header>
        <h1>Front-end coding challenge</h1>
      </header>
      <main>
        <UserTable />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
