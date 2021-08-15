import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import theme from "../styles/theme"

const Footer = () => {
  return (
    <Container>
      <Link to="/">notes</Link>
      <Link to="https://about.me/munhoz">about</Link>
      <Link to="https://github.com/fnmunhoz">github</Link>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  padding: 20px;

  a {
    color: ${theme.colors.primary};
    padding-right: 8px;
  }
`

export default Footer
