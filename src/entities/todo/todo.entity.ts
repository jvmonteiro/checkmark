import {Entity, Column, ObjectIdColumn } from 'typeorm'
import { ITodo } from './interfaces/todo.interface';

@Entity()
export class Todo implements ITodo{
  @ObjectIdColumn()
  id: string;

  @Column()
  creator: string;

  @Column()
  creation_date: Date;
  
  @Column()
  description: string;

  @Column()
  last_updated: Date;
}