import { Link } from 'react-router-dom'
import { FiHome, FiArrowLeft } from 'react-icons/fi'

import { Container, Header, Content } from './styles'

export const About = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <FiHome size={30} /> About
      </Header>
      <Content>
        <p>About page</p>

        <Link to="/">
          <FiArrowLeft />
          Go to Home
        </Link>
      </Content>
    </Container>
  )
}
