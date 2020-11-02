import { ObjectId } from 'mongodb';

export interface ITodo {
  _id: ObjectId;
  creator: string;
  creation_date: string;
  description: string;
  completed: boolean;
  last_updated: string;
}
