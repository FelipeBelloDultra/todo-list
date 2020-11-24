import React from 'react';

import { TasksDoneProvider } from './tasksDone';

const AppProvider = ({ children }) => (
  <TasksDoneProvider>{children}</TasksDoneProvider>
);

export default AppProvider;
