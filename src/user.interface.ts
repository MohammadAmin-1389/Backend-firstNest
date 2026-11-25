import { Role } from "./role.enum.js";

export interface User {
    id : number ,
    name : string ,
    age : number ,
    addres : string ,
    phone :number ,
    role : Role
}