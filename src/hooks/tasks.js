import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { v4 as uuidv4 } from 'uuid';

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storageTasks = localStorage.getItem('@Tasks');

    if (storageTasks) {
      return JSON.parse(storageTasks);
    }

    return [];
  });

  const [dones, setDones] = useState(() => {
    const storageDoneTasks = parseInt(
      localStorage.getItem('@CountDoneTasks'),
      10
    );

    if (storageDoneTasks) {
      return storageDoneTasks;
    }

    return 0;
  });

  useEffect(() => {
    localStorage.setItem('@CountDoneTasks', dones);
  }, [dones]);

  useEffect(() => {
    localStorage.setItem('@Tasks', JSON.stringify(tasks));
  }, [tasks]);

  const incrementTasks = useCallback(() => {
    setDones(dones + 1);
  }, [dones]);

  const decrementTasks = useCallback(() => {
    if (dones >= 0) {
      setDones(dones - 1);
    }
  }, [dones]);

  const handleDoneTask = useCallback(
    (id) => {
      const newTask = tasks.map((task) => {
        if (task.id === id) {
          if (task.check) {
            decrementTasks();
          } else {
            incrementTasks();
          }

          task.check = !task.check;
        }

        return task;
      });

      setTasks(newTask);
    },
    [tasks, decrementTasks, incrementTasks]
  );

  const handleCreateNewTask = useCallback((data) => {
    const { description } = data;

    if (!description) {
      return;
    }

    const newTasks = {
      id: uuidv4(),
      description,
      check: false,
    };

    setTasks((prev) => [newTasks, ...prev]);
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        dones,
        handleCreateNewTask,
        handleDoneTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }

  return context;
}

export { TasksProvider, useTasks };
