import * as faker from 'faker';
import { TodoDto } from 'src/entities/todo/dto/todo.dto';

export const data = (amount: number): TodoDto[] => {
  const todos: TodoDto[] = [];
  for (let i = 0; i < amount; i++) {
    const todo: TodoDto = {
      creator: faker.name.findName(),
      creation_date: faker.date.past().toISOString(),
      description: faker.random.words(Math.floor(6 * Math.random()) + 4),
      last_updated: faker.date.recent().toISOString(),
    };
    todos.push(todo);
  }
  return todos;
};
