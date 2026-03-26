import { Router } from "express";
import { todoController } from "./controller.js";



export class AppRouterTodo {


    static get router():Router{

        const router = Router();
        
        const todosContr = new todoController()

        router.get('/',todosContr.getTodo);
        router.get('/:id', todosContr.gettodoByid);
        router.post('/', todosContr.crearTodo);
        router.delete('/:id', todosContr.EliminarTodo);
        router.patch('/:id', todosContr.actulizar);

        return router;
    }
}