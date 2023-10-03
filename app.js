import express from "express";
import cors from 'cors'
import db from "./database/db.js"
import brandRouter from './routes/brandRouter.js'
import productRouter from "./routes/productRouter.js";

export const app = express()
app.get('/', (_req, res) =>{
res.send('Hola Api')
})

app.use(cors())
app.use(express.json())
app.use('/brand', brandRouter)
app.use('/products', productRouter)
app.use('/brand/:id/', brandRouter)

try{
	await db.authenticate()
		console.log('conected to database')
	}catch(error){
		console.log(`error: ${error}`)
	}


export const server = app.listen(8000,() =>{
console.log('🚀server up in http://localhost:8000/')
})
