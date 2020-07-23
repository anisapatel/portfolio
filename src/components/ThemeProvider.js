import React, { useState } from "react"

export const ThemeContext = React.createContext({
  theme: {
    type: "light",
    primary: "white",
    text: "#black",
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
      primary: "#343a40",
      text: "white",
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

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  )
}
