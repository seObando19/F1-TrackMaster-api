import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcomeApi(): string {
    return 'Welcome Formula 1';
  }
}
