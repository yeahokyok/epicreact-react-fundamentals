// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [firstName, setFirstName] = React.useState('')
  const [error, setError] = React.useState(null)

  // 🐨 add a submit event handler here (`handleSubmit`).
  const handleSubmit = event => {
    event.preventDefault()
    let username = event.target.elements[0].value
    let note = event.target.elements.noteInput.value
    let nickname = inputRef.current.value
    onSubmitUsername(nickname)
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const handleChange = event => {
    let value = event.target.value
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  const handleChangeFirstName = event => {
    let value = event.target.value
    setFirstName(value.toLowerCase())
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" />
        <label>note:</label>
        <input id="noteInput" type="text" />
        <label>nickname:</label>
        <div style={{color: 'red'}}>{error}</div>
        <input ref={inputRef} onChange={handleChange} type="text" />

        <label>First name</label>
        <input type="text" value={firstName} onChange={handleChangeFirstName} />
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
