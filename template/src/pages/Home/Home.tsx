import React from 'react'
import { Link } from 'react-router-dom'
import { FiSun, FiArrowRight } from 'react-icons/fi'

import { Container, Header, Content } from './styles'

const Home = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <FiSun size={30} /> Home
      </Header>
      <Content>
        <p>Welcome</p>

        <Link to="/about">
          <FiArrowRight />
          Go to About
        </Link>
      </Content>
    </Container>
  )
}

export default Home
