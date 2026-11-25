import { Injectable } from '@nestjs/common';
import { LargeNumberLike } from 'crypto';
import { type User } from './user.interface.js';

@Injectable()
export class AppService {
  getUsers: {
    id: number;
    name: string;
    age: number;
    phone: number;
    addres: string;
  }[] = [
    {
      id: 1,
      name: 'ali',
      age: 13,
      phone: 9124569883,
      addres: 'lflom,pgfkdojjihdogd',
    },
    {
      id: 2,
      name: 'mahdi',
      age: 42,
      phone: 985489568487654464845648,
      addres: 'lkglsktpsktrmosktretgik',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }
  // getAllUsers() {
  //   return this.getUsers;
  // }
  getUserById(id: number) {
    return this.getUsers.find((user) => user.id === id);
  }
  addUser(data: User) {
    this.getUsers.push(data);
    return data;
  }
}
