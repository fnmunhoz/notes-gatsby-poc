import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import theme from "../styles/theme"
import ThemeToggler from "../styles/ThemeToggler"

const Header = ({ siteTitle = `` }: { siteTitle: string }) => (
  <Container>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <ThemeToggler />
  </Container>
)

const Container = styled.header`
  display: flex;
  padding: 20px;

  a {
    text-decoration: none;
    font-weight: bolder;
    color: ${theme.colors.primary};
  }

  h1 {
    flex: 1;
    margin: 0;
  }
`

export default Header
