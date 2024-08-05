export interface Request {
  method: string;
  header: Headers[];
  body?: Body;
  url: URL;
}

export interface Item {
  name: string;
  request: Request;
  response: any[];
}