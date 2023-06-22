import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return DateResponse', () => {
      const date = new Date();

      const dateResponse = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
      const timeResponse = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      expect(appController.date()).toStrictEqual({
        date: dateResponse,
        time: timeResponse,
      });
    });
  });
});
