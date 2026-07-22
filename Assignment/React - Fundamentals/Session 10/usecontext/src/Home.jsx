import React, { useContext } from 'react'
import { themecontext } from './ThemeContext'

function Home() {

    const context = useContext(themecontext)
    const {theme, toggletheme} = context

  return (
    <div className={theme}>
        <h1>Theme Mode {theme}</h1> <br/>
        <button onClick={toggletheme}>Toggle Theme</button>
    </div>
  )
}

export default Home