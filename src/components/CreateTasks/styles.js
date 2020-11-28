import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  max-width: 400px;
  width: 100%;
  height: 300px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  box-shadow: 0px 2px 14px 4px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  transform: translate(-50%, -50%);
  padding: 50px 10px 10px 10px;

  button {
    height: 20px;
    width: 20px;
    background: #347aeb;
    border: 0;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    right: 10px;

    &:hover {
      &:after {
        opacity: 0;
      }
    }

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background: #347aeb;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
      transition: opacity 0.1s;
    }

    img {
      height: 60%;
      width: 60%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
