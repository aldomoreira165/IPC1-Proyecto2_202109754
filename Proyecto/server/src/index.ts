import express, { Application } from 'express';
import morgan from 'morgan'
import cors from 'cors'
import indexRoutes from './indexRoutes';

class Server{

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): any{
        this.app.set('port',3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }

    routes(): void{
          this.app.use('/', indexRoutes)
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
           console.log(`El servidor está corriendo en el puerto`, this.app.get('port'))  
        })
    }

}

const server = new Server();
server.start();