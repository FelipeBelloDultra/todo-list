import React from 'react';

import closeButton from '../../assets/close-button.svg';

import { Container, ModalContainer } from './styles';

const CreateTasks = ({ closeModal }) => {
  return (
    <Container>
      <ModalContainer>
        <button type="button" onClick={closeModal}>
          <img src={closeButton} alt="Icon" />
        </button>
      </ModalContainer>
    </Container>
  );
};

export default CreateTasks;
