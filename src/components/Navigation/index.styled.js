import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 50px;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 100px 100px 150px;
  border-bottom: 1px solid #f9f4f4;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      margin-left: 15px;
    }
  }
  div:first-child {
    justify-content: flex-start;
    margin-left: 20px;
  }
  .contact {
    border: 1px solid #f9f4f4;
    border-top: 0px;
    border-bottom: 0px;
  }
  div:last-child {
    color: red;
    cursor: pointer;
    svg {
      margin-left: 5px;
    }
  }
`;
