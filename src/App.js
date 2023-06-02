import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])

  const [colaboradores, setColaborador] = useState([])

  const aoColaboradorAlterado = (colaborador) => {
    setColaborador([...colaboradores, colaborador]);
  }

  function deletarColaborador () {
    console.log('deletando colabotador');
  }

  function mudaCorDoTime (cor, id) {
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoColaboradorAlterado(colaborador)}/>

      {times.map(time => <Time
        mudarCor={mudaCorDoTime}
        id={time.id} 
        nome={time.nome} 
        key={time.nome} 
        cor={time.cor} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.lista === time.nome)}
        aoDeletar={ deletarColaborador }
        />)}
    </div>

  );
}

export default App