import React from "react"
import { ThemeContextProvider } from "./src/components/ThemeProvider"

// highlight-start
export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)
