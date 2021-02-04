import { getRepository } from 'typeorm';
import { Medicos} from '../entity/Medicos';
import {Request, Response} from 'express';



//Buscar TODAS as Tasks
export const getMedicos = async (request: Request, response: Response) => {

    const medicos = await getRepository(Medicos).find()
    return response.json(medicos)
}

//Buscar uma Task por ID
export const getMedico = async (request: Request, response: Response) => {
    const { id } = request.params
    const medico = await getRepository(Medicos).findOne(id)
    return response.json(medico)
    
};

//Incluir uma Task
export const saveMedico = async (request:Request, response: Response) =>{
    const medicos = await getRepository(Medicos).save(request.body)
    response.json(medicos)
};

//Atualizar uma Task
export const updateMedico = async (request:Request, response: Response) =>{
    const { id } = request.params

    const medico = await getRepository(Medicos).update(id, request.body)

    if (medico.affected == 1){
        const medicoUpdated = await getRepository(Medicos).findOne(id)
        return response.json(medicoUpdated)
    }
    return response.status(404).json({message: 'Medico not found'})
};

//Remover uma Task
export const removeMedico = async (request:Request, response: Response) =>{
    const { id } = request.params

    const task = await getRepository(Medicos).delete(id)

    if (task.affected == 1){
        const taskUpdated = await getRepository(Medicos).findOne(id)
        return response.json({message: 'Medico removed'})
    }
    return response.status(404).json({message: 'Medico not found'})
};



