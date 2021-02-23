import styled from "styled-components";

const Container = styled.div`
  margin: 10px 20px 0 20px;
  color: white;

  &:last-child {
    margin-bottom: 50px;
  }

  @media all and (max-width: 450px) {
    margin: 10px 10px 0 10px;

    & h2 {
      margin: 20px 0 0 0;
    }
  }
`;
const PostersContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 20px 0;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @media all and (max-width: 450px) {
    padding: 20px 0 20px 0;
  }
`;
const Poster = styled.img<{ large: boolean }>`
  object-fit: contain;
  min-width: ${(props) => (props.large ? "213px" : "266px")};
  height: ${(props) => (props.large ? "320px" : "150px")};
  cursor: pointer;
  transition: all 450ms;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    transform: ${(props) => (props.large ? "1.09" : "1.08")};
  }
`;

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 24px;
  color: white;
  background-color: #212121;

  @media all and (max-width: 450px) {
    height: 80px;
    font-size: 18px;
  }
`;

export { Container, PostersContainer, Poster, Error };
