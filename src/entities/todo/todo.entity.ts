import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ITodo } from './interfaces/todo.interface';
// import { ObjectId } from 'mongodb';

export type TodoDocument = ITodo & Document;

@Schema()
export class Todo {
  @Prop()
  creator: string;

  @Prop()
  creation_date: string;

  @Prop()
  description: string;

  @Prop()
  last_updated: string;

  @Prop()
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
