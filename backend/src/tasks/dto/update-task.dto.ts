export class UpdateTaskDto {
    name?: string;
    subject?: string;
    priority?: 'baixo' | 'medio' | 'alto';
    completed?: boolean;
  }
  