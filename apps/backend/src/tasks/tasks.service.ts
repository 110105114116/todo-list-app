import { Injectable, Type } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Tasks } from './Entitys/tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private TasksRepo: Repository<Tasks>,
  ) {}

  TasksFindAll(): Promise<Tasks[]> {
    return this.TasksRepo.find();
  }

  TasksFindOne(id: number): Promise<Tasks> {
    return this.TasksRepo.findOne({
      where: { id }
    });
  }

  TasksInsertOne(data: any): Promise<Tasks[]> {
    return this.TasksRepo.save(data);
  }

  async updateOne(id: number): Promise<any> {
    const task = await this.TasksRepo.findOne({
      where: { id }
    })

    if (!task) return null;

    if (task.status === 'completed') {
      this.TasksRepo.update(
        { id },
        { status: 'incompleted' }
      );

      return 'incompleted';
    }

    this.TasksRepo.update(
      { id },
      { status: 'completed' }
    );

    return 'completed';
  }

  deleteOne(id: number): Promise<any> {
    return this
      .TasksRepo
      .update({ id }, {
        isDelete: true
      });
  }

}
