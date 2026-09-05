import { Router } from "express";
import { Request,Response } from "express";
import { addService } from "../controllers/servicesControler";
import { getAllServices } from "../controllers/servicesControler";


const router = Router();
router.get('/services', getAllServices)
router.post('/services' ,addService)




export default router;

