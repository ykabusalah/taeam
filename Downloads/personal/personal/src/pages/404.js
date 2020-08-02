import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import GlobalWrapper from '../shared/wrapper'

const Div = styled.div`
  margin: 24px;
`

function NotFoundPage() {
  return (
    <GlobalWrapper>
      <Div>
        <h1>404</h1>
        <p>You just hit a route that doesn&#39;t exist. Sorry about that! </p>
        <Link to='/'>Back to Homepage</Link>
      </Div>
    </GlobalWrapper>
  )
}

export default NotFoundPage
