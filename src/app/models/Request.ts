import { User } from './User';
export class Requests{
  _id?:string;
  viewer_id:string;
  donar_id:string;
  created:Date;
  donar: User;
}
