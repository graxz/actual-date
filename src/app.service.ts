import { Injectable } from '@nestjs/common';

export interface DateResponse {
  date: string;
  time: string;
}

@Injectable()
export class AppService {
  date(): DateResponse {
    const date = new Date();

    const dateResponse = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    const timeResponse = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return {
      date: dateResponse,
      time: timeResponse,
    };
  }
}
