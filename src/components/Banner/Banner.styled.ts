import styled from 'styled-components'

const Container = styled.div<{imageUrl: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  object-fit: contain;
  height: 550px;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
  background-position: center 10%;
  color: white;
`
const Content = styled.div`
  padding-top: 120px;
  padding-left: 30px;
  padding-right: 30px;
  height: 190px;

  @media all and (max-width: 450px) {
    padding-top: 150px;
  }
`
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;

  @media all and (max-width: 450px) {
    font-size: 2.2rem;
  }
`
const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 0.2vw;
  margin-right: 1rem;
  padding: 0.5rem 2rem;
  font-weight: 700;
  color: white;
  background-color: rgba(51, 51, 51, 0.8);
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`
const Description = styled.div`
  max-width: 360px;
  height: 80px;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.9rem;
`
const Fade = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(0, 0, 0, 0.31),
    #000
  );
`

export {
  Container,
  Content,
  Title,
  Button,
  Description,
  Fade
}