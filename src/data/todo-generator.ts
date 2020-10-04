import * as faker from 'faker';
import { ITodo } from '../entities/todo/interfaces/todo.interface';

export const data: ITodo[] = (() => {
  const todos: ITodo[] = [];
  for (let i = 0; i < 15; i++) {
    const todo: ITodo = {
      id: faker.random.uuid(),
      creator: faker.name.findName(),
      creation_date: faker.date.past(),
      description: faker.random.words(Math.floor(6 * Math.random()) + 4),
      last_updated: faker.date.recent(),
    };
    todos.push(todo);
  }
  return todos;
})();
