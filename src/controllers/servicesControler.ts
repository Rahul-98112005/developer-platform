import { Request,Response } from "express";
import { services } from "../services";
import {Service} from "../services"


export const DeleteById = (req:Request, res:Response) => {

    let { id } = req.params
    // let newArr: Service[]

    let index = services.findIndex((service) => {
        return service.id === Number(id) 
    })


    if(index === -1)
       return res.status(404).json({message: "Service Not found"})
    
        
      services.splice(index,1);
      return res.status(200).json({message: "Service deleted secessfullly",
        services: services})
    

   
}





export const UpdateById = (req: Request, res:Response) => {

    let { id } = req.params;
    let { title } = req.body;

    if (!title) {
    return res.status(400).json({
        message: "Title is required"
    });
}

    let obj = services.find((service) => service.id === Number(id))

    if(obj)
    {
        obj.title = title
        return res.status(200).json({message: "Update SuccessFull",obj})
    }
    else
    {
        return res.status(404).json({message: "Service Not Found"})
    }

}




export const getServiceById = (req:Request, res:Response) => {

    let { id } = req.params

    let obj = services.find((service) => service.id === Number(id))

    if(obj)
       return res.status(200).json({obj})
    else
        return res.status(400).json({message: "Invalid Request No service "})
}



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