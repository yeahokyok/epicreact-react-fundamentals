// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// add default value to className so we won't get undefined class name
const Box = ({className = '', style, size, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
