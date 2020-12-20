import React from 'react';

import { Container, ListTasks } from './styles';

import { useTasks } from '../../hooks/tasks';

const List = () => {
  const { tasks, handleDoneTask } = useTasks();

  return (
    <Container>
      {tasks.length ? (
        <>
          {tasks.map((task, i) => (
            <ListTasks key={task.id} className={task.check && 'checked'}>
              <span>{i + 1}</span>

              <div className="task-description">
                <p>{task.description}</p>
              </div>

              <input
                type="checkbox"
                checked={task.check}
                onChange={() => handleDoneTask(task.id)}
              />
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
