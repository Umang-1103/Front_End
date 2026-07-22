// Task 3 & 4
import React, { createContext, useState } from 'react'
import Home from './Home'

export const themecontext = createContext()

function ThemeContext() {

  const [theme, settheme] = useState("light")

  const toggletheme = () => {
    settheme(theme === "light" ? "dark" : "light")
  }

  return (
    <themecontext.Provider value={{theme, toggletheme}} >
      <Home/>
    </themecontext.Provider>
  )
}

export default ThemeContext