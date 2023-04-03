/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

import { SmsService } from './sms.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://VishweshPatel:vishwesh@cluster0.nykqjcu.mongodb.net/?retryWrites=true&w=majority',
    ),
    ScheduleModule.forRoot(),
    TasksModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, SmsService],
})
export class AppModule {}
