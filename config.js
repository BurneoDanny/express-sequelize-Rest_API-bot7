import {config} from 'dotenv'
config()// estas dos lineas es para poder leer variables de entorno del modulo nodejs dotenv
export const  PORT= process.env.PORT || 3000
export const  DB_USER= process.env.DB_USER || 'root'
export const  DB_PASSWORD= process.env.DB_PASSWORD || '1234'
export const  DB_PORT= process.env.DB_PORT ||  3306
export const  DB_HOST= process.env.DB_HOST || '127.0.0.1'
export const  DB_NAME= process.env.DB_NAME || 'autor_novela'

