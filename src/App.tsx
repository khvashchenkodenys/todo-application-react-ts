import React from 'react';
import { TodosProvider } from './src/context/TodosContext';
import { TodoApp } from './src/components/TodoApp';

export const App: React.FC = () => {
  return (
    <TodosProvider>
      <TodoApp />
    </TodosProvider>
  );
};
