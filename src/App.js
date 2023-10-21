import React, { Fragment } from 'react'
import "./App.css"
import Heading from './components/Heading/Heading'
import Game from './components/Game/Game'


const App = () => {
  return (
    <Fragment>
      <Heading/>
      <Game/>
    </Fragment>
  )
}

export default App
