/* Todo module */
import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoSchema } from './todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Todo', schema: TodoSchema }])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
