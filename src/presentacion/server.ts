import express, { Router } from 'express'
import path from 'path';
import { fileURLToPath } from 'url'; // Importante para ES Modules

// Creamos el equivalente a __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface option {
    port : number,
    public_path: string
    routers : Router
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly public_path : string
    private readonly routers : Router
    constructor (option :option){

        const{port,public_path, routers} = option

        this.port = port
        this.public_path = public_path
        this.routers = routers
        
    }

    async start(){
    
    // publica el folder 

        this.app.use(express.json());
        
        // this.app.use(express.urlencoded());

        this.app.use(express.static(this.public_path));

        this.app.use(this.routers)

        // dirige las rutas que no existen a la ruta establecidad 
        this.app.get(/(.*)/,(req, res) =>{
            const indexPath = path.join(__dirname,`../../${this.public_path}/index.html`)
            res.sendFile(indexPath)
        })


        this.app.listen(this.port,()=>{
            console.log(`Server running on por ${this.port}`)
        })
    }
}