import { Injectable } from '@nestjs/common';
import { UsersController } from './users/users.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Petcity: Home Page';
  }
}
