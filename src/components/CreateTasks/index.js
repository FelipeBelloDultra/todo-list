import React, { useRef, useCallback, useEffect } from 'react';

import { useTasks } from '../../hooks/tasks';

import { Container, ModalContainer, FormTask } from './styles';

import closeButton from '../../assets/close-button.svg';

const CreateTasks = ({ closeModal }) => {
  const { handleCreateNewTask } = useTasks();

  const descriptionRef = useRef();

  useEffect(() => {
    descriptionRef.current.focus();
  }, []);

  const handleAdd = useCallback(
    (event) => {
      event.preventDefault();

      const description = descriptionRef.current.value;

      const data = { description };

      handleCreateNewTask(data);

      descriptionRef.current.value = '';

      closeModal();
    },
    [closeModal, handleCreateNewTask]
  );

  return (
    <Container>
      <ModalContainer>
        <button className="btn-save-task" type="button" onClick={closeModal}>
          <img src={closeButton} alt="Icon" />
        </button>

        <FormTask onSubmit={handleAdd}>
          <textarea
            ref={descriptionRef}
            type="text"
            placeholder="Descriçâo de sua tarefa..."
          />

          <button type="submit">Adicionar tarefa</button>
        </FormTask>
      </ModalContainer>
    </Container>
  );
};

export default CreateTasks;
