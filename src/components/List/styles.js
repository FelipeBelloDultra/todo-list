import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 14px 4px rgba(0, 0, 0, 0.02);
`;

export const ListTasks = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  position: relative;

  &.checked {
    opacity: 0.7;

    &:before {
      content: '';
      position: absolute;
      height: 1px;
      width: 95%;
      left: 47%;
      padding-left: 50px;
      transform: translate(-50%, -50%);
      background: #ccc;
    }

    * {
      user-select: none;
    }
  }

  &:not(:last-child) {
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }

  &:not(:first-child) {
    padding-top: 20px;
  }

  .task-description {
    flex: 1;
    height: 36px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    p {
      text-indent: 30px;
      word-break: break-all;
    }
  }

  span {
    font-size: 15px;
    font-weight: 500;
  }

  p {
    padding: 0 20px;
    line-height: 18px;
  }

  input[type='checkbox'] {
    height: 20px;
    width: 20px;
    border: 1px solid #eee;
    cursor: pointer;
  }
`;
