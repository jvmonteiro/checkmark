import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTodoDto, TodoDto } from './dto/todo.dto';
import { ITodo } from './interfaces/todo.interface';
import { TodoDocument } from './todo.entity';


@Injectable()
export class TodoService {
  
  constructor(@InjectModel('Todo') private todoModel: Model<TodoDocument>) {
  }
  
  // Create a new todo
  async save(todo: TodoDto) {
    const todoDoc = new this.todoModel(todo);
    return await todoDoc.save();
  }

  // Find all todos in database.
  async findAll(): Promise<ITodo[]> {
    return await this.todoModel.find().exec();
  }

  // Find one todo in database.
  async findOne(id: string): Promise<ITodo> {    
    return await this.todoModel.findById(id);
  }

  // Update the desired todo.
  async update(todo: CreateTodoDto): Promise<any> {
    // return Promise.resolve('UPDATED TODO');
    return await this.todoModel.findByIdAndUpdate(todo._id, todo, {new: true, upsert: true});
  }

  // Removes one todo.
  async delete(_id: string): Promise<any> {
    return await this.todoModel.findOneAndDelete({_id});  
  }
}
