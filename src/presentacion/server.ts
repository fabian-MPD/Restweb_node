import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url'; // Importante para ES Modules

// Creamos el equivalente a __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface option {
    port : number,
    public_path: string
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly public_path : string
    constructor (option :option){

        const{port,public_path} = option

        this.port = port
        this.public_path = public_path
        
    }

    async start(){
        
        this.app.use(express.static(this.public_path));

        this.app.get(/(.*)/,(req, res) =>{
            const indexPath = path.join(__dirname,`../../${this.public_path}/index.html`)
            res.sendFile(indexPath)
        })


        this.app.listen(3000,()=>{
            console.log(`Server running on por ${this.port}`)
        })
    }
}