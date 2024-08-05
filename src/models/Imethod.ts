export interface User {
  name: string;
  request: Request;
}

export interface Request {
  method: string;
  header: any[];
  body: Body;
}
export interface Item {
  name: string;
  request: Request;
  response: any[];
}
