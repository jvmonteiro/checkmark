import { ObjectId } from 'mongodb';
import { ITodo } from '../interfaces/todo.interface';
export class TodoDto {
  creator: string;
  creation_date: string;
  description: string;
  last_updated: string;
}
