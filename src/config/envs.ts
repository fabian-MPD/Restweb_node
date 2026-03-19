import 'dotenv/config';
import envVar from 'env-var'

// npm i dotenv
// npm i env-var

// con esto instalamos dotenv para controlar las variables y env-var para poder controlar esas variables ponerle valores como requerido  valores por defectos y son numero o no 


export const envs = {

    PORT: envVar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH : envVar.get('PUBLIC_PATH').default('public').required().asString(),
}