import React, { useState, useContext, useEffect } from "react"
import switchStyles from "../components/switch.module.scss"
import { ThemeContext } from "./ThemeProvider"
import { FaSun, FaMoon } from "react-icons/fa"

const Switch = () => {
  const state = useContext(ThemeContext)

  return (
    // <div className={switchStyles.switchSection}>
    <>
      <input
        checked={state.theme.type === "dark"}
        // check={value}
        className={switchStyles.switch}
        id={`react-switch-new`}
        type="checkbox"
        onClick={() => {
          state.setTheme(state.theme.type)
        }}
      />
      <label
        style={{
          background: state.theme.type === "dark" && "#2a5298",
        }}
        className={switchStyles.switchLabel}
        htmlFor={`react-switch-new`}
      >
        {state.theme.type === "dark" ? (
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
    </>
    /* </div> */
  )
}

export default Switch
