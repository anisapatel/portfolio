import React, { useState, useEffect } from "react"

export const ThemeContext = React.createContext({
  theme: {
    type: "light",
    primary: "white",
    text: "black",
  },
  setTheme: () => {},
})

export const ThemeContextProvider = props => {
  const theme = {
    light: {
      type: "light",
      primary: "white",
      text: "black",
      transition: "primary 0.3s, text 0.3s",
    },
    dark: {
      type: "dark",
      primary: "#2c2d30",
      text: "#d0d0d1",
      color: "#f96c85",
      transition: "primary 0.3s, text 0.3s",
    },
  }

  const setTheme = type => {
    setState({ ...state, theme: type === "dark" ? theme.light : theme.dark })
  }

  const initState = {
    theme: theme.light,
    setTheme: setTheme,
  }

  const [state, setState] = useState(initState)

  // useEffect(() => {
  //   function loadTheme() {
  //     const theme = localStorage.getItem("theme")
  //     return theme.light || theme.dark
  //   }
  //   setTheme(loadTheme())
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem("theme", theme)
  // }, [theme])

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  )
}
