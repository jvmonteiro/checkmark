import {Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn} from 'typeorm'
import { ITodo } from './interfaces/todo.interface';
import { ObjectId } from 'mongodb';
@Entity()
export class Todos implements ITodo{
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  creator: string;

  @Column()
  creation_date: string;
  
  @Column()
  description: string;

  @Column()
  last_updated: string;
}