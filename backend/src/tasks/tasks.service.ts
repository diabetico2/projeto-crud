import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.idCounter++,
      name: createTaskDto.name,
      subject: createTaskDto.subject,
      priority: createTaskDto.priority,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  findAll(filter?: string, priority?: string): Task[] {
    let tasks = this.tasks;
    if (filter) {
      tasks = tasks.filter(task => task.name.toLowerCase().includes(filter.toLowerCase()));
    }
    if (priority) {
      tasks = tasks.filter(task => task.priority.toLowerCase() === priority.toLowerCase());
    }
    return tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      throw new NotFoundException(`Tarefa com id ${id} não encontrada`);
    }
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    if (updateTaskDto.name) {
      task.name = updateTaskDto.name;
    }
    if (updateTaskDto.subject) {
      task.subject = updateTaskDto.subject;
    }
    if (updateTaskDto.priority) {
      task.priority = updateTaskDto.priority;
    }
    if (typeof updateTaskDto.completed === 'boolean') {
      task.completed = updateTaskDto.completed;
    }
    return task;
  }

  remove(id: number): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) {
      throw new NotFoundException(`Tarefa com id ${id} não encontrada`);
    }
    this.tasks.splice(index, 1);
  }
}
