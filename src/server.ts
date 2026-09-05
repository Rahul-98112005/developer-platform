import express from 'express';
import {Request , Response} from "express";


const app = express();
const port = 8080;
app.use(express.json());

app.get('/',(req:Request,res:Response) => {

    res.send("Server is fine")

})

app.listen(port, () => console.log(`Server is running on ${port}`))
