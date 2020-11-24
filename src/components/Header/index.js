import React from 'react';

import { useTasksDone } from '../../hooks/tasksDone';

import { Container } from './styles';

const Header = () => {
  const { dones, incrementTasks } = useTasksDone();

  return (
    <Container>
      <h1>{dones}</h1>
      <button type="button" onClick={incrementTasks}>
        Increment
      </button>
    </Container>
  );
};

export default Header;
