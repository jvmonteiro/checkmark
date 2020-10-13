/* Todo module */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todos } from './todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todos])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
