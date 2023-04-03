import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SmsService } from './sms.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly smsService: SmsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('send-sms')
  async sendSms(@Body('to') to: string, @Body('message') message: string) {
    await this.smsService.sendSms(to, message);

    return { message: 'SMS sent successfully' };
  }
}
