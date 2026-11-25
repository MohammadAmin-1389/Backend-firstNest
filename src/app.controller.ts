import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service.js';
import { type User } from './user.interface.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('users')
  getusers() {
    return this.appService.getUsers
  }
  @Get('/users/:id')
  getUserById(@Param('id') id: string) {
    return this.appService.getUserById(Number(id));
  }
  @Post('users')
  AddUser(@Body() data: User) {
    return this.appService.addUser(data);
  }
}
