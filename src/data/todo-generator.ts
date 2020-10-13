import * as faker from 'faker';
import { ITodo } from '../entities/todo/interfaces/todo.interface';
import { ObjectID } from 'mongodb';

export const data: ITodo[] = (() => {
  const todos: ITodo[] = [];
  for (let i = 0; i < 15; i++) {
    const todo: ITodo = {
      _id: new ObjectID(),
      creator: faker.name.findName(),
      creation_date: faker.date.past().toISOString(),
      description: faker.random.words(Math.floor(6 * Math.random()) + 4),
      last_updated: faker.date.recent().toISOString(),
    };
    todos.push(todo);
  }
  return todos;
})();
