import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { Repository } from 'typeorm';

import { TodoDto } from './dto/todo.dto';
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
  async save(todo: TodoDto) {
    // this.todoList.push(todo);
    const todoObject = new Todos();    
    todoObject.creator = todo.creator
    todoObject.creation_date = todo.creation_date
    todoObject.description = todo.description
    todoObject.last_updated = todo.last_updated
    this.todoRepo.save(todoObject);
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
