import { Router } from "express";
import { Request,Response } from "express";
import { addService } from "../controllers/servicesControler";
import { getAllServices } from "../controllers/servicesControler";
import { getServiceById } from "../controllers/servicesControler";
import { UpdateById } from "../controllers/servicesControler";
import { DeleteById } from "../controllers/servicesControler";

const router = Router();
router.get('/services/:id', getServiceById)
router.get('/services', getAllServices)
router.post('/services' ,addService)
router.patch('/services/:id',UpdateById)
router.delete('/services/:id', DeleteById)




export default router;

