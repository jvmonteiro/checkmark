import { ObjectID } from 'typeorm';
import { ITodo } from '../interfaces/todo.interface';
export class TodoDto implements ITodo {
  _id: ObjectID;
  creator: string;
  creation_date: string;
  description: string;
  last_updated: string;
}
