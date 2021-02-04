import { Router, Request, Response } from 'express';
import {getMedicos, saveMedico, getMedico, updateMedico, removeMedico} from  './controller/TasksController';


const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Ahhh Mulekeeee'})
})

routes.get('/medicos', getMedicos)
routes.get('/medicos/:id', getMedico)
routes.post('/medicos', saveMedico)
routes.put('/medicos/:id', updateMedico)
routes.delete('/medicos/:id', removeMedico)
//routes.patch('/tasks/:id', finishedTask)



export default routes