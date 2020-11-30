import React from 'react';

import { TasksProvider } from './tasks';

const AppProvider = ({ children }) => <TasksProvider>{children}</TasksProvider>;

export default AppProvider;
