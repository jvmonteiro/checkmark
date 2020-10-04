import { Injectable } from '@nestjs/common';
import { ITodo } from './interfaces/todo.interface';
import { data } from '../../data/todo-generator';

@Injectable()
export class TodoService {
  private readonly todoList: ITodo[] = [...data];
  save(todo: ITodo) {
    this.todoList.push(todo);
  }
  findAll(): ITodo[] {
    return this.todoList;
  }
  findOne(id: string): ITodo {
    return this.todoList.filter(todo => todo.id === id)[0];
  }
}
