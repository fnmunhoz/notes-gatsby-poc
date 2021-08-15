/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "normalize.css"
import "../styles/vars.css"
import theme from "../styles/theme"
import * as React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          body {
            color: ${theme.colors.primary};
            background-color: ${theme.colors.background};
          }
        `}
      />
      <Container>
        <Header siteTitle={data.site.siteMetadata?.title} />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
`

const Content = styled.main`
  flex: 1;
`

export default Layout
