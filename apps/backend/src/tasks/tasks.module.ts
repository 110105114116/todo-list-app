import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksController } from './tasks.controller';
import { Tasks } from './Entitys/tasks.entity';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tasks])],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}