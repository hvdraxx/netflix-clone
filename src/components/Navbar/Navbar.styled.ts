import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: transparent;
  transition: all 0.5s ease-in;
  z-index: 1;

  &.background {
    background-color: black;
  }

  @media all and (max-width: 450px) {
    height: 30px;
    padding: 10px 0;
  }
`;
const Logo = styled.img`
  margin-left: 20px;
  width: 80px;
  object-fit: contain;
  cursor: pointer;

  @media all and (max-width: 450px) {
    margin-left: 10px;
    width: 70px;
  }
`;
const Avatar = styled(Logo)`
  margin-left: 0;
  margin-right: 20px;
  width: 30px;

  @media all and (max-width: 450px) {
    margin-right: 10px;
    width: 25px;
  }
`;

export { Container, Logo, Avatar };
