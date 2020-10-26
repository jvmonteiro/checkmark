import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ITodo } from './interfaces/todo.interface';
import { CreateTodoDto, TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';
import { TodoDocument } from './todo.entity';


@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async list(): Promise<ITodo[]> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id): Promise<ITodo> {
    return await this.todoService.findOne(id);
  }

  @Post()
  save(@Body() todo: TodoDto): Promise<TodoDocument> {
    return this.todoService.save(todo);
  }

  @Put()
  async update(@Body() todo: CreateTodoDto): Promise<any> {
    return await this.todoService.update(todo);
  }

  @Delete()
  async delete(@Body() _id: string): Promise<any> {
    return await this.todoService.delete(_id);
  }
}
