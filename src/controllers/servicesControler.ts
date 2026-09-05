import { Request,Response } from "express";
import { services } from "../services";



export const getAllServices = (req:Request, res:Response) => {
    
    return res.status(200).json({services});
}


export const addService = (req:Request, res:Response) => {
    let {title} = req.body;
    
    if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }


        let obj = {
            id : services.length + 1,
            title: title
        }

        services.push(obj);

        return res.status(200).json({obj});
    
}