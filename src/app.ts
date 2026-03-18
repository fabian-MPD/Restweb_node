import { Router } from "express";
import { envs } from "./config/envs.js";
import { Server } from "./presentacion/server.js";
import { AppRouter } from "./presentacion/routes.js";


(async ()=>{
    main()

})();


function main(){

    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
        routers : AppRouter.router
    });

    server.start()
    
}