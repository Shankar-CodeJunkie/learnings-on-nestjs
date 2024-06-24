import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { EntityRepository } from 'typeorm';
import { TasksRepository } from './task.repository';
import { TasksController } from './tasks.controller';

/* 
  We can import Module via this or also as an Injectoable service like shown in the uncommented codes

  @Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TasksController],
  providers: [TasksService]
}) */

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
  exports: [TypeOrmModule]
})  
export class TasksModule {}
