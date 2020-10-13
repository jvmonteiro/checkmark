import { ObjectID } from 'typeorm';

export interface ITodo {
  _id: ObjectID;
  creator: string;
  creation_date: string;
  description: string;
  last_updated: string;
}
