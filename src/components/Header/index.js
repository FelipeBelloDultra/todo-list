import React from 'react';

import { useTasks } from '../../hooks/tasks';

import { HeaderContainer } from './styles';

const Header = ({ openModal }) => {
  const { dones } = useTasks();

  return (
    <HeaderContainer>
      <h1>
        <span>{dones}</span> Tarefas concluídas
      </h1>
      <button type="button" onClick={openModal}>
        Adicionar Tarefa
      </button>
    </HeaderContainer>
  );
};

export default Header;
