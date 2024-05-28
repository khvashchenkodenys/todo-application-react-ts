import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export const TodoActiveCount = () => {
  const { todos } = useContext(TodosContext);
  const activeTasksCount = todos.filter(todo => !todo.completed).length;

  return (
    <span className="todo-count" data-cy="TodosCounter">
      {activeTasksCount < 2 ? `${activeTasksCount} item left` : `${activeTasksCount} items left`}
    </span>
  );
};
