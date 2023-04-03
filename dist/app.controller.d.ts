import { AppService } from './app.service';
import { SmsService } from './sms.service';
export declare class AppController {
    private readonly appService;
    private readonly smsService;
    constructor(appService: AppService, smsService: SmsService);
    getHello(): string;
    sendSms(to: string, message: string): Promise<{
        message: string;
    }>;
}
