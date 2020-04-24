import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;

  svg {
    margin-right: 10px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    margin-top: 20px;
    color: #3a4db4;
    text-decoration: none;
    font-weight: bold;
  }

  width: 700px;
  height: 100px;
`
