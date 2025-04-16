import { MainClass } from './main-class';
import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  let myClass = new MainClass();
  res.status(200).send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
