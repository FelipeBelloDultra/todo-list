import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 14px 4px rgba(0, 0, 0, 0.02);
`;

export const ListTasks = styled.ul`
  display: flex;
  text-decoration: none;

  .task-description {
    height: 36px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    span {
      position: absolute;
    }

    p {
      padding-left: 20px;
      line-height: 18px;
    }
  }
`;
