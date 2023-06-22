import { Injectable } from '@nestjs/common';

export interface DateResponse {
  date: string;
  time: string;
}

@Injectable()
export class AppService {
  date(): DateResponse {
    // Processo demorado para testar o load balancer
    for (let i = 0; i < 1000000000; i++) {
      i + 1;
    }

    const date = new Date();

    const dateResponse = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    const timeResponse = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return {
      date: dateResponse,
      time: timeResponse,
    };
  }
}
