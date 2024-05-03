import 'express-async-errors';
import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from './errors/AppError';

const app = express();

app.use(express.json());
app.use(routes);
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    };

    res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
})

app.listen(8000, ()=>{
    console.log('Server is runnig in port 8000')
});