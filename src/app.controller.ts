import { Controller, Get } from '@nestjs/common';
import { AppService, DateResponse } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  date(): DateResponse {
    return this.appService.date();
  }
}
