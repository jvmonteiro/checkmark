export class TodoDto {
  creator: string;
  creation_date: string;
  description: string;
  last_updated: string;
}

export type CreateTodoDto = { _id: string; } & TodoDto;