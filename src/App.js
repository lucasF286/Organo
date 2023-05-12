import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Loud',
      corPrimaria: '#57c298',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Furia',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'vFury',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    }
  ]

  const [colaboradores, setColaborador] = useState([])

  const aoColaboradorAlterado = (colaborador) => {
    console.log(colaboradores);
    setColaborador([...colaboradores, colaborador]);
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoColaboradorAlterado(colaborador)} />
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}

    </div>
  );
}

export default App