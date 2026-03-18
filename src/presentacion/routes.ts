import { Router } from "express";
import { AppRouterTodo } from "./todos/todosRoutes.js";



export class AppRouter {


    static get router():Router{

        const router = Router();

        router.use('/api/todos', AppRouterTodo.router);

        return router;
    }
}