import React from 'react';

import { Container, ListTasks } from './styles';

import { useTasks } from '../../hooks/tasks';

const List = () => {
  const { tasks } = useTasks();

  return (
    <Container>
      {tasks.length ? (
        <>
          {tasks.map((task, i) => (
            <ListTasks key={task.id}>
              <div className="task-description">
                <span>{i + 1}</span>
                <p>{task.description}</p>
              </div>
            </ListTasks>
          ))}
        </>
      ) : (
        <p>Empty</p>
      )}
    </Container>
  );
};

export default List;
