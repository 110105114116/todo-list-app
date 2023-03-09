import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'tdeveloperP@ssw0rd',
      database: 'todoassign',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true
    }),
    TasksModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}