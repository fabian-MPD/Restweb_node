
import { type Request, type Response } from "express"
import { prisma } from "../../Data/postgres"
import { createTodosV, updateTodosV } from "../../domain/dtos/todos/index"




export class todoController {

    constructor() {

    }


    public getTodo = async  (req: Request, res: Response) => {

        const todos = await prisma.todo.findMany();

        if(!todos) return res.status(400).json({error:'No hay usurios'})

        return res.json(todos)

    }

    public gettodoByid = async (req: Request, res: Response) => {

        try {

            const id = Number(req.params.id)

            if (isNaN(id)) {

                return res.status(400).json({ error: `este no es un  id valido` })
            }

            const todo = await prisma.todo.findUnique({
                where: {
                    id: id
                }
            })

            if (!todo) {

                return res.status(404).json({ error: `no se encuentra ningun usuario con el id ${id}` })
            }

            res.status(200).json({ todo })

        } catch (error) {

            res.status(500).json(error)
        }
    }


    public crearTodo = async (req: Request, res: Response) => {

        try {

            const [error, crearTodoDto]= createTodosV.create(req.body)

            if (error) return res.status(400).json(error);

            const todo = await prisma.todo.create({
                data:{

                    nombre:crearTodoDto!.Nombre,
                    edad: crearTodoDto!.edad,
                    fecha:crearTodoDto!.fecha
                    
                } 
            })

            return res.json(todo)

        } catch (error) {

        }
    }

    public actulizar = async (req:Request, res: Response) =>{


        try {
            const id = Number(req.params.id);
           const [error ,  updateTodos ] = updateTodosV.create({...req.body, id})
    
            if(error) return res.status(400).json(error)
    
    
            const todoUp = await prisma.todo.update({
                where : { id : id},
                data: updateTodos!.value    
            });

            

            res.status(200).json(todoUp)

            
        } catch (error: any ) {

            if(error.code == "P2025"){
                
                return res.status(404).json({error:'Usuario no encontrado'})
            }

            res.status(500).json(error)
        }

    }

    public EliminarTodo = async (req: Request, res: Response) => {

        try {
        
            const id = Number(req.params.id)

            if (isNaN(id)) return res.status(400).json('id no valido')

            const indexTodo = await prisma.todo.findUnique({
                where: {
                    id: id
                }
            })

            if (!indexTodo) {

                return res.status(400).json({ error: 'Id no existe o ya fue eleminado' })
            }

            const deleteTodo = await prisma.todo.delete({
                where:{
                    id : id
                }
            })

            res.status(200).json(deleteTodo)


        } catch (error) {
            res.status(500).json({})
        }

    }
}