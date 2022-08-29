import React from 'react'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'
import Template from './components/Template'

function Main() {
  return (
    <div>
        <NavBar/>
        <Template/>
        <MainContent/>
    </div>
  )
}

export default Main