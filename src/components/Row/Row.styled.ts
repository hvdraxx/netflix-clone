import styled from 'styled-components'

const Container = styled.div`
  margin: 10px 20px 0 20px;
  color: white;

  &:last-child {
    margin-bottom: 50px;
  }
`
const PostersContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none
  }
`
const Poster = styled.img<{large: boolean}>`
  object-fit: contain;
  width: 100%;
  max-height: ${props => props.large ? "320px" : "150px"};
  cursor: pointer;
  transition: transform 450ms;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    transform: ${props => props.large ? "1.09" : "1.08"}
  }
`

export {
  Container,
  PostersContainer,
  Poster
}
