import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUsers(): { id: number; name: string; age: number , phone : number , addres : string }[] {
    return [
      { id: 1, name: 'ali', age: 13 , phone : 9124569883 , addres : "lflom,pgfkdojjihdogd" },
      { id: 2, name: 'mahdi', age: 42 , phone : 985489568487654464845648 , addres : "lkglsktpsktrmosktretgik"},
    ];
  }
}
