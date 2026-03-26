import strict from "node:assert/strict"
import type { Init } from "node:v8"



export class createTodosV {

    public readonly Nombre : string
    public readonly edad : number
    public readonly fecha : Date
    constructor(Nombre:string , edad:number ){

        this.Nombre = Nombre
        this.edad = edad
        this.fecha = new Date()

        
    }

    static create(props :{[key:string]:any}):[string, undefined] | [undefined, createTodosV

    ] {

        const {Nombre, edad} = props;

        
        
        if(!Nombre || typeof Nombre !== "string"){
            
            
            
            return ['Valor no valido', undefined];
            
        } 
        
        if(isNaN(edad)) {
            return [' edad no valida', undefined ]
        }
        
        const Edad  = Number(edad)


        return [undefined, new createTodosV(Nombre,Edad)]
    }
}