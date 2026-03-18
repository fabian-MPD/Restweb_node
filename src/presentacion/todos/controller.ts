import strict from "assert/strict"
import { error } from "console"
import { type Request, type Response } from "express"

const todos = 
            [
                {id: 1, nombre : 'paola',  edad:34, fecha: new Date()},
                {id: 2, nombre : 'fabian', edad:34, fecha: new Date()},
                {id: 3, nombre : 'fabian', edad:34, fecha: new Date()},
            ]


export class todoController {

    constructor(){

    }


    public getTodo = (req:Request, res:Response)=>{

             return res.json(todos)

        }

    public gettodoByid = (req:Request, res: Response) => {

        try {

            const id  =  Number(req.params.id)

            if (isNaN(id)){

                return res.status(400).json({ error:  `este no es un  id valido`})
            } 

            const todo = todos.find(todo => todo.id == id)

            return ( todo ) 
                ?  res.status(200).json({todo}) 
                :  res.status(404).json({error:`no se encuentra ningun usuario con el id ${id}`})
            
        } catch (error) {

            res.status(500).json(error)
        }
    }


    public crearTodo = (req:Request, res:Response) => {

        try {

            const {Nombre, edad} = req.body
    
            if(!Nombre) throw new Error('Se  requiere el nombre');

            const newTodo = {
                id:  todos.length + 1,
                nombre: Nombre,
                edad : edad,
                fecha : new Date()
            }

          todos.push(newTodo)
            
        
            return res.json(newTodo)
            
        } catch (error) {
            
        }
    }

    public EliminarTodo = (req:Request, res:Response) =>{

        try {
            console.log('ingrese')
            const id = Number(req.params.id)
            
            console.log(id)
            console.log('ingrese2')
    
            if(isNaN(id))  return res.status(400).json('id no valido')
            
            const indexTodo = todos.findIndex((todo)=> todo.id == id);

            if(indexTodo == -1 ){

                return res.status(400).json({error:'Id no existe o ya fue eleminado'})
            }

            const deleteTodo = todos.splice(indexTodo,1)

            res.status(200).json(`usuario de  ${deleteTodo[0]?.nombre} fue eliminado ${deleteTodo[0]?.id}`)
           
            
        } catch (error) {
            res.status(500).json({})
        }

    }
}