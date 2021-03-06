import React, { useState, useCallback } from 'react';

import Header from '../../components/Header';
import CreateTasks from '../../components/CreateTasks';
import List from '../../components/List';

import { Container } from './styles';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Container>
      <Header openModal={handleOpenModal} />

      <List />

      {open && <CreateTasks closeModal={handleCloseModal} />}
    </Container>
  );
};

export default Home;
