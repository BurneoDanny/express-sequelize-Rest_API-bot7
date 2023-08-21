/* IMPORTS TIPO ES MODULE */
import express from "express";
import autorRoutes from "./routes/autor.routes.js"
import indexRoutes from "./routes/index.routes.js"


const app = express(); //permite usar instrucciones http

app.use(express.json())// para que el req value pueda entender objetos json

app.use(indexRoutes)
app.use('/api', autorRoutes)
app.use((req,res,next)=>res.status(404).json({message: 'error: End-point nor found'}))// SI VISITA UN URL NO DEFINIDO


export default app;