import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export function createTodo({ userId, title, completed }: Omit<Todo, 'id'>) {
  return client.post<Todo>('/todos', { userId, title, completed });
}

export const updateTodo = ({
  id,
  title,
  completed,
  userId,
}: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, { title, completed, userId });
};
