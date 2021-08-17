import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
//trata erros básicos e manda para o frontend.
app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    //retorna erro genérico quando não há erro específico.
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);
//somente para verificação durante o desenvolvimento, já mapeado pelo prettier/eslint para retirada futura.
app.listen(3333, () => {
  console.log('Server started on port 3333! 🏆');
});
