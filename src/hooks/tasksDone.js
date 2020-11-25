import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

const TasksDoneContext = createContext();

const TasksDoneProvider = ({ children }) => {
  const [dones, setDones] = useState(() => {
    const storageTasks = parseInt(localStorage.getItem('@CountDoneTasks'), 10);

    if (storageTasks) {
      return storageTasks;
    }

    return 0;
  });

  const incrementTasks = useCallback(() => {
    setDones(dones + 1);
  }, [dones]);

  const decrementTasks = useCallback(() => {
    if (dones === 0) {
      return;
    }

    setDones(dones - 1);
  }, [dones]);

  useEffect(() => {
    localStorage.setItem('@CountDoneTasks', dones);
  }, [dones]);

  return (
    <TasksDoneContext.Provider
      value={{ dones, incrementTasks, decrementTasks }}
    >
      {children}
    </TasksDoneContext.Provider>
  );
};

function useTasksDone() {
  const context = useContext(TasksDoneContext);

  if (!context) {
    throw new Error('useTasksDone must be used within a TasksDoneProvider');
  }

  return context;
}

export { TasksDoneProvider, useTasksDone };
