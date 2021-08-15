import * as React from "react"
import { useEffect, useState } from "react"

import light from "../images/light.svg"
import dark from "../images/dark.svg"
import styled from "@emotion/styled"

const ThemeToggler = () => {
  const [theme, setTheme] = useState("dark")
  const nextTheme = theme === "light" ? "dark" : "light"

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <Button onClick={() => setTheme(nextTheme)}>
      <img src={nextTheme === "light" ? dark : light} />
    </Button>
  )
}

const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export default ThemeToggler
