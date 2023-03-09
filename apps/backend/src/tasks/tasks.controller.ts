import { 
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  Request
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor( private readonly tasksService: TasksService ) {}

  //? GET /tasks
  @Get()
  serectAll() {
    return this
      .tasksService
      .TasksFindAll();
  }

  //? GET /tasks/:id
  @Get(':id')
  selectOne(
    @Param() params
  ) {
    return this
      .tasksService
      .TasksFindOne(params.id);
  }

  //? POST /tasks
  @Post()
  insertOne(
    @Body() body
  ) {
    return this
      .tasksService
      .TasksInsertOne(body);
  }

  //? PUT /tasks/:id
  @Put(':id')
  updateOne(
    @Param() params
  ) {
    return this.tasksService.updateOne(params.id);
  }

  //? PUT /tasks/delete/:id
  @Put('delete/:id')
  deleteOne(
    @Param() params
  ) {
    return this.tasksService.deleteOne(params.id);
  }

}
