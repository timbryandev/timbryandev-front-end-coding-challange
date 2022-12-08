import { useState } from 'react'
import './App.css'

function App (): JSX.Element {
  const [clicks, setClicks] = useState(0)

  function incrementClicks (): void {
    setClicks(prev => prev + 1)
  }

  return (
    <div className='App'>
      <h1>Front-end coding challenge</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> to get started!
        </p>
      </div>
      <p className='read-the-docs'>
        If you haven't already, make sure you read the{' '}
        <a href='/README.md'>README.md</a> and{' '}
        <a href='/CHALLENGE.md'>CHALLENGE.md</a>!
      </p>
      <button data-testid='increase-clicks' onClick={incrementClicks}>
        {clicks === 0 ? 'Click me!' : `You have clicked me ${clicks} times!`}
      </button>
    </div>
  )
}

export default App
