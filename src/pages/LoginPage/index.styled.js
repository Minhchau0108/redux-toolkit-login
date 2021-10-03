import styled from "styled-components";

export const StyledLoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr 1fr;
  .image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 1050px) {
    grid-gap: 1rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const StyledForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login-form {
    min-width: 360px;
  }
  .login-form-forgot {
    float: right;
    color: black;
    font-weight: 700;
    cursor: pointer;
  }

  .login-form-button {
    width: 100%;
    background-color: black;
    border: none;
    border-radius: 6px;
    font-weight: 700;
  }
  h1 {
    margin-top: 60px;
    font-weight: 700;
  }

  .ant-input-affix-wrapper {
    background-color: #f9f4f4;
  }
`;
