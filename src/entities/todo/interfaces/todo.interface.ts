import { ObjectId } from 'mongodb';

export interface ITodo {
  _id: ObjectId;
  creator: string;
  creation_date: string;
  description: string;
  last_updated: string;
}
