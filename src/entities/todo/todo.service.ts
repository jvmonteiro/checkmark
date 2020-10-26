import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { ObjectID, Repository } from 'typeorm';

import { Todos } from './todo.entity';
import { ITodo } from './interfaces/todo.interface';
import { data } from '../../data/todo-generator';

@Injectable()
export class TodoService {
  private readonly todoList: ITodo[]; 
  
  constructor(@InjectRepository(Todos) private todoRepo: Repository<Todos>) {
    this.todoList = [...data];
  }
  
  // Create a new todo
  async save(todo: ITodo) {
    // this.todoList.push(todo);
    this.todoRepo.save(todo);
  }

  // Find all todos in database.
  async findAll(): Promise<ITodo[]> {
    return await this.todoRepo.find();
  }

  // Find one todo in database.
  async findOne(id: string): Promise<ITodo> {    
    return await this.todoRepo.findOne({_id: new ObjectId(id)});
  }

  // Update the desired todo.
  async update(id: string): Promise<any> {
    return Promise.resolve('UPDATED THE TODO!');
  }

  // Removes one todo.
  async remove(id: string): Promise<any> {
    return Promise.resolve('REMOVED TODO');
  }
}
