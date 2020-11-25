import React from 'react';

import { useTasksDone } from '../../hooks/tasksDone';

import { HeaderContainer } from './styles';

const Header = () => {
  const { dones } = useTasksDone();

  return (
    <HeaderContainer>
      <h1>
        <span>{dones}</span> Tarefas concluídas
      </h1>
      <button type="button" onClick={() => {}}>
        Adicionar Tarefa
      </button>
    </HeaderContainer>
  );
};

export default Header;
