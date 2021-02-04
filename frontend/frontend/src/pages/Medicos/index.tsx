import React, { useState, useEffect} from 'react';
import { Table, Button} from 'react-bootstrap';
import api from '../../services/api';
import { useHistory} from 'react-router-dom';
import './index.css';


interface IMedico {
    id: number;
    nome: string;
    crm: string;    
    telefone: string;
    celular: string;
    cep: string;
    especialidade_um: string;
    especialidade_dois: string;
}



const Medicos: React.FC = () => {

    const [medicos, setMedicos] = useState<IMedico[]>([]);
    const history = useHistory()


    useEffect(() => {
        loadMedicos()
    },[])


    
    async function deleteMedico(id: number){
        await api.delete(`/medicos/${id}`)
        loadMedicos()
    }

    async function loadMedicos(){
        const response = await api.get('/medicos')
        console.log(response)
        setMedicos(response.data)
    }

    function newMedico (){
        history.push('/cadastrar-medico')
    }

    function editarMedico(id: number){
        history.push(`/cadastrar-medico/${id}`)
    }

    
    

  return (
        <div className="container">
           <hr />
            <div className="medico-header">
            <h1> Médicos</h1>
            <Button variant="dark" size="sm" onClick={newMedico}>Adicionar Médico</Button>
            </div>
            <br />
    <Table striped bordered hover className="text-center">
        <thead>
            <tr>
             <th>Id</th>
            <th>Nome</th>
            <th>CRM</th>
            <th>Telefone</th>
            <th>Celular</th>
            <th>CEP</th>
            <th>1° Especialidade</th>
            <th>2° Especialidade</th>
            <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {
                medicos.map( medico => (
                        <tr>
                            <td>{medico.id}</td>
                            <td>{medico.nome}</td>
                            <td>{medico.crm}</td>
                            <td>{medico.telefone}</td>
                            <td>{medico.celular}</td>
                            <td>{medico.cep}</td>
                            <td>{medico.especialidade_um}</td>
                            <td>{medico.especialidade_dois}</td>
                            <td> 
                                <Button size="sm" onClick={()=> editarMedico(medico.id)}>Editar </Button>
                                <br />
                                <br />
                                <Button size="sm" variant="danger"onClick={()=> deleteMedico(medico.id)}>Remover </Button>                              
                            </td>
                        </tr>
                ))
            }


            
                        
        </tbody>
        </Table>          

        </div>
  );
}

export default Medicos;