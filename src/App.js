import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
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

  function mudaCorDoTime (cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome){
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