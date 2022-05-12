// Basic Forms
// http://localhost:3000/isolated/final/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {
      target: {
        elements: [{value: username}],
      },
    } = event
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
