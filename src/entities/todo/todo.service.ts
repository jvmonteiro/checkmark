import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Todo } from './todo.entity';

import { ITodo } from './interfaces/todo.interface';
import { data } from '../../data/todo-generator';
import { ObjectID, Repository } from 'typeorm';

@Injectable()
export class TodoService {
  private readonly todoList: ITodo[]; 
  
  constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>) {
    this.todoList = [...data];
  }
  
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
