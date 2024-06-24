import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksServiceService } from './tasks-service/tasks-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './tasks/task.entity';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
      entities: [TaskEntity]
    })
  ],
  controllers: [AppController],
  providers: [AppService, TasksServiceService],

})
export class AppModule {}
