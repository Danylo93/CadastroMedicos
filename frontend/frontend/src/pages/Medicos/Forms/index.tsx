import React, { useState, useEffect, ChangeEvent} from 'react';
import {  Button, Form} from 'react-bootstrap';
import api from '../../../services/api';
import { useHistory, useParams} from 'react-router-dom';
import InputMask from 'react-input-mask';
import './index.css';

interface IMedico {
    
    nome: string;
    crm: string;    
    telefone: string;
    celular: string;
    cep: string;
    especialidade_um: string;
    especialidade_dois: string;
}

interface IParamsProps {
    id: string;
}


const Medicos: React.FC = () => {
    const history = useHistory()
    const { id } = useParams<IParamsProps>();
    const [model, setModel] = useState<IMedico>({
        nome: '',
        crm: '',
        telefone: '',
        celular: '',
        cep: '',
        especialidade_um: '',
        especialidade_dois: ''
    })

    useEffect(() => {
        if (id != undefined){
            findTask(id)   
        }            
    }, [id])

    function updatedModel (e: ChangeEvent<HTMLInputElement>){
            setModel({
                ...model,
                [e.target.name]: e.target.value
            })
    }

   async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if (id != undefined){
            const response = await api.put(`/medicos/${id}`, model)
        }else{
            const response = await api.post('/medicos', model)
        }
        back()
      }

    async function findTask (id: string){
        const response = await api.get(`medicos/${id}`)
        setModel({
        nome: response.data.nome,
        crm: response.data.crm,
        telefone: response.data.telefone,
        celular: response.data.celular,
        cep: response.data.cep,
        especialidade_um: response.data.especialidade_um,
        especialidade_dois: response.data.especialidade_dois

        })
    }

    function back (){
        history.goBack()
    }

  return (
      
    
        <div className="container">
           <hr />
            <div className="medico-header">
            <h1> Cadastro de Médicos</h1>
            <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />
            <div className="container">

            
            <div className="forms">
            <Form onSubmit={onSubmit}>
            <Form.Group >                
                <Form.Label>Nome</Form.Label>
                <Form.Control className="form-name-input" placeholder="Informe o seu nome"
                     maxLength={120}                     
                     type="text" 
                     name="nome"
                     value={model.nome}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                />                              
               
            </Form.Group>

            <Form.Group >
                <Form.Label>CRM</Form.Label>
                <InputMask  mask="99.999.99" type="string" placeholder="00.000.00" 
                name="crm"
                value={model.crm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
            </Form.Group>
            
            <Form.Group >            
                <Form.Label>Telefone Fixo</Form.Label>
                <InputMask  mask="(99)\ 99999999" 
                 type="text" placeholder="(xxx)0000-0000"
                name="telefone"
                value={model.telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
            </Form.Group>

            <Form.Group >
                <Form.Label>Celular</Form.Label>
                <InputMask  mask="(99)\ 99999-9999"
                 type="text" placeholder="(xxx)00000-0000" 
                name="celular"
                value={model.celular}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
            </Form.Group>

            <Form.Group >
                <Form.Label>CEP</Form.Label>
                <InputMask  mask="99999-999" type="text" placeholder="00000-000" 
                name="cep"
                value={model.cep}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
            </Form.Group>

            <Form.Group>
                  <Form.Label>1° Especialidade</Form.Label>
                  <Form.Control as="select"
                  name="especialidade_um"
                  value={model.especialidade_um}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}>
                    <option>Selecione uma Especialidade</option>
                    <option>ALERGOLOGIA</option>
                    <option>ANGIOLOGIA</option>
                    <option>BUCO MAXILO</option>
                    <option>CARDIOLOGIA CLÍNICA</option>
                    <option>CARDIOLOGIA INFANTIL</option>
                    <option>CIRURGIA CABEÇA E PESCOÇO</option>
                    <option>CIRURGIA CARDÍACA</option>
                    <option>CIRURGIA DE TORÁX</option>
                </Form.Control>
                <br />
                <Form.Label>2° Especialidade</Form.Label>
                  <Form.Control as="select"
                  name="especialidade_dois"
                  value={model.especialidade_dois}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}>
                    <option>Selecione uma Especialidade</option>
                    <option>ALERGOLOGIA</option>
                    <option>ANGIOLOGIA</option>
                    <option>BUCO MAXILO</option>
                    <option>CARDIOLOGIA CLÍNICA</option>
                    <option>CARDIOLOGIA INFANTIL</option>
                    <option>CIRURGIA CABEÇA E PESCOÇO</option>
                    <option>CIRURGIA CARDÍACA</option>
                    <option>CIRURGIA DE TORÁX</option>
                </Form.Control>
  
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Salvar
            </Button>
        </Form>
        </div>
            </div>
            

            

        </div>
  );
}

export default Medicos;