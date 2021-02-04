import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../src/pages/Home';
import Medicos from '../src/pages/Medicos';
import MedicosForm from '../src/pages/Medicos/Forms';

const Routes: React.FC = () => {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/medicos" exact component={Medicos} />
        <Route path="/cadastrar-medico" exact component={MedicosForm} />
        <Route path="/cadastrar-medico/:id" exact component={MedicosForm} />
      </Switch>
  );
}

export default Routes;