import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ITodo } from './interfaces/todo.interface';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';


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
  save(@Body() todo: TodoDto): Promise<void> {
    return this.todoService.save(todo);
  }
}
