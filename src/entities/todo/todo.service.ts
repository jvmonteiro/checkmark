import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Todos } from './todo.entity';

import { ITodo } from './interfaces/todo.interface';
import { data } from '../../data/todo-generator';
import { ObjectID, Repository } from 'typeorm';

@Injectable()
export class TodoService {
  private readonly todoList: ITodo[]; 
  
  constructor(@InjectRepository(Todos) private todoRepo: Repository<Todos>) {
    this.todoList = [...data];
  }
  
  save(todo: ITodo) {
    this.todoList.push(todo);
  }
  async findAll(): Promise<ITodo[]> {
    return await this.todoRepo.find();
  }
  findOne(id: ObjectID): ITodo {    
    return this.todoList.filter(todo => todo._id === id)[0];
  }
}
