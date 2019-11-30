export class User{
  _id?:string;
  first_name:string;
  last_name:string;
  email: string;
  password:string;
  date:Date;
  donar: Boolean;
  blood_type: String;
  weight: Int16Array;
  height: Int16Array;
}

export interface UserDetails {
  user: User;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}
