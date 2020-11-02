import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ITodo } from './interfaces/todo.interface';
import { TodoDto, UpdateTodoDto } from './dto/todo.dto';
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
  async update(@Body() todo: UpdateTodoDto): Promise<any> {
    return await this.todoService.update(todo);
  }

  @Delete(':id')
  async delete(@Param('id') _id: string): Promise<TodoDocument> {
    return await this.todoService.delete(_id);
  }

  @Post('/batch/fill/:amount')
  async fill(@Param('amount') amount): Promise<TodoDocument[]> {
    return await this.todoService.fill(amount);
  }

  @Delete('/batch/delete/:amount')
  async clear(
    @Param('amount', ParseIntPipe) amount: number,
  ): Promise<TodoDocument[]> {
    return await this.todoService.clear(amount);
  }
}
