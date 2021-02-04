import React, {useState, useEffect}from 'react';
import { Navbar, Nav,Form, FormControl, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';





const Header: React.FC = () => {

    const [initialRep, retInitialRep] = useState([])
    
    useEffect(() => {
      const fetRep = async() => {
          const response = await fetch('/medicos');
          const data = await response.json();
          console.log(data);

      }
    })

  return (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand as={Link} to="/">Cadastro de Médicos</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/medicos">Médicos</Nav.Link>
        </Nav>
        
    </Navbar>
  );
}

export default Header;