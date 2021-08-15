import * as React from "react"
import { useEffect, useState } from "react"

import light from "../images/light.svg"
import dark from "../images/dark.svg"
import styled from "@emotion/styled"
import useHasMounted from "../hooks/useHasMounted"

const isBrowser = typeof window !== "undefined"

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    if (!isBrowser) return null

    return window.localStorage.getItem("theme") ?? "dark"
  })
  const nextTheme = theme === "light" ? "dark" : "light"

  useEffect(() => {
    document.body.dataset.theme = theme
    window.localStorage.setItem("theme", theme)
  }, [theme])

  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  return (
    <Button onClick={() => setTheme(nextTheme)}>
      <img src={theme === "light" ? light : dark} />
    </Button>
  )
}

const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export default ThemeToggler
