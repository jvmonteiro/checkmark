import { ITodo } from '../interfaces/todo.interface';

export class TodoDto implements ITodo {
  id: string;
  creator: string;
  creation_date: Date;
  description: string;
  last_updated: Date;
}
