import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTodoDto, TodoDto, UpdateTodoDto } from './dto/todo.dto';
import { ITodo } from './interfaces/todo.interface';
import { TodoDocument } from './todo.entity';
import { data } from '../../data/todo-generator';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private todoModel: Model<TodoDocument>) {}

  // Create a new todo
  async save(todo: TodoDto) {
    const todoDoc = new this.todoModel(todo);
    return await todoDoc.save();
  }

  // Find all todos in database.
  async findAll(): Promise<TodoDocument[]> {
    return await this.todoModel.find().exec();
  }

  // Find one todo in database.
  async findOne(id: string): Promise<TodoDocument> {
    return await this.todoModel.findById(id);
  }

  // Update the desired todo.
  async update(todo: UpdateTodoDto): Promise<any> {
    return await this.todoModel.findByIdAndUpdate(todo._id, todo, {
      new: true,
      upsert: true,
    });
  }

  // Removes one todo.
  async delete(_id: string): Promise<TodoDocument> {
    return await this.todoModel.findOneAndDelete({ _id });
  }

  async fill(amount: number): Promise<TodoDocument[]> {
    const todos = data(amount);
    return await this.todoModel.insertMany(todos);
  }

  async clear(amount: number): Promise<TodoDocument[]> {
    const todos: TodoDocument[] = await this.todoModel
      .find({}, {}, { limit: amount, sort: { timestamp: -1 } })
      .exec();
    const ids = todos.map(doc => doc._id);

    await this.todoModel.deleteMany({ _id: { $in: ids } });
    return todos;
  }
}
