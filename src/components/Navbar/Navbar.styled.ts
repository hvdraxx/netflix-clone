import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px);
  padding: 20px;
  background-color: transparent;
  transition: all 0.5s ease-in;
  z-index: 1;

  &.background {
    background-color: black;
  }
`
const Logo = styled.img`
  width: 80px;
  object-fit: contain;
  cursor: pointer;
`
const Avatar = styled(Logo)`
  width: 30px;
`

export {
  Container,
  Logo,
  Avatar
}