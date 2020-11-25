import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 2px 14px 4px rgba(0, 0, 0, 0.02);

  h1 {
    font-size: 26px;
    letter-spacing: 0.75px;
    color: #347aeb;

    span {
      font-size: 30px;
      color: #000;
    }
  }

  button {
    border: 1px solid #347aeb;
    background: transparent;
    color: #347aeb;
    font-weight: 500;
    border-radius: 5px;
    font-size: 18px;
    height: 35px;
    padding: 0 10px;
    transition: background-color 0.2s ease-out;

    &:hover {
      background: #347aeb;
      color: #fff;
    }
  }
`;
