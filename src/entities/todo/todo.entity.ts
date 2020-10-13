import {Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID} from 'typeorm'
import { ITodo } from './interfaces/todo.interface';

@Entity()
export class Todos implements ITodo{
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  creator: string;

  @Column()
  creation_date: string;
  
  @Column()
  description: string;

  @Column()
  last_updated: string;
}