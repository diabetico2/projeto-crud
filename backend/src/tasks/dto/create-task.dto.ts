export class CreateTaskDto {
    name: string;
    subject: string;
    priority: 'baixo' | 'medio' | 'alto';
  }
  