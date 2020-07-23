import React, { useState, useContext } from "react"
import switchStyles from "../components/switch.module.scss"
import { ThemeContext } from "./ThemeProvider"
import { FaSun, FaMoon } from "react-icons/fa"

const Switch = () => {
  const [value, setValue] = useState(false)
  const state = useContext(ThemeContext)

  const handleToggle = () => {
    setValue(!value)
  }

  return (
    <div className={switchStyles.switchSection}>
      <input
        checked={value}
        onChange={handleToggle}
        className={switchStyles.switch}
        id={`react-switch-new`}
        type="checkbox"
        onClick={() => {
          state.setTheme(state.theme.type)
        }}
      />
      <label
        style={{
          background: value && "#2a5298",
        }}
        className={switchStyles.switchLabel}
        htmlFor={`react-switch-new`}
      >
        {value ? (
          <FaMoon
            size="1em"
            color="white"
            className={switchStyles.switchButton}
          />
        ) : (
          <FaSun
            size="1em"
            color="#ffea00"
            className={switchStyles.switchButton}
          />
        )}
      </label>
    </div>
  )
}

export default Switch

{
  /* <button
variant='contained'
onClick={() => {
  state.setTheme(state.theme.type)
}}
style={btn}
>
Toggle Theme
</button> */
}
