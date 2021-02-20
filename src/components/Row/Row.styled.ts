import styled from "styled-components";

const Container = styled.div`
  margin: 10px 50px 0 50px;
  color: white;

  &:last-child {
    margin-bottom: 50px;
  }
`;
const PostersContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  padding: 20px 0;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Poster = styled.img<{ large: boolean }>`
  object-fit: contain;
  min-width: ${(props) => (props.large ? "213px" : "266px")};
  height: ${(props) => (props.large ? "320px" : "150px")};
  background-color: #090909;
  cursor: pointer;
  transition: all 450ms;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    transform: ${(props) => (props.large ? "1.09" : "1.08")};
  }
`;

export { Container, PostersContainer, Poster };
