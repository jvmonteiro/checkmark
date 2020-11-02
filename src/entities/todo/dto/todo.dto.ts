export class TodoDto {
  creator: string;
  description: string;
  completed: boolean;
  creation_date: string;
  last_updated: string;
}

export type CreateTodoDto = { _id: string } & TodoDto;

export type UpdateTodoDto = Omit<
  CreateTodoDto,
  'creation_date' | 'last_updated'
>;
