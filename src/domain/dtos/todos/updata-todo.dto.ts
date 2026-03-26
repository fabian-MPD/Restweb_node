import strict from "node:assert/strict"
import type { Init } from "node:v8"



export class updateTodosV {

    public readonly id : number
    public readonly Nombre : string
    public readonly edad : number
    public readonly fecha : Date
    constructor(Nombre:string , edad:number,  id:number){
        this.id = id
        this.Nombre = Nombre
        this.edad = edad
        this.fecha = new Date()

        
    }


    get value(){

        const objeto: {[key:string]:any} = {};
        if(this.Nombre) objeto.nombre = this.Nombre;
        if(this.edad) objeto.edad = this.edad;

        return objeto

    }



    static create(props :{[key:string]:any}):[string, undefined] | [undefined, updateTodosV] {

        const {id, Nombre, edad} = props;

          if (isNaN(id)) {

                return ['id  no valido' , undefined]
            }

        
        
        if(Nombre ){
            
            if(typeof Nombre !== "string"){

                return ['Valor no valido', undefined];
            }
            
            
            
        } 
        if(edad){

            if(isNaN(edad)) {
                return [' edad no valida', undefined ]
            }
            
            
        }
        const Edad  = Number(edad)
        

        return [undefined, new updateTodosV(Nombre,Edad,id)]
    }
}