import React from 'react'
import { Link } from 'react-router-dom'
import { FiSun, FiArrowRight } from 'react-icons/fi'

import { Container, Header, Content } from './styles'

const Restrict = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <FiSun size={30} /> Restrict
      </Header>
      <Content>
        <p>Restrict page</p>

        <Link to="/">
          <FiArrowRight />
          Go to Home
        </Link>
      </Content>
    </Container>
  )
}

export default Restrict
