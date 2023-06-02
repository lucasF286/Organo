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

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Lucas',
      cargo: 'Desenvolvedor web',
      imagem: 'https://github.com/lucasF286.png',
      lista: times[1].nome 
    },
    {
      id: uuidv4(),
      nome: 'Lucas',
      cargo: 'Desenvolvedor web',
      imagem: 'https://github.com/lucasF286.png',
      lista: times[1].nome 
    },
    {
      id: uuidv4(),
      nome: 'Lucas',
      cargo: 'Desenvolvedor web',
      imagem: 'https://github.com/lucasF286.png',
      lista: times[1].nome 
    },
    {
      id: uuidv4(),
      nome: 'Lucas',
      cargo: 'Desenvolvedor web',
      imagem: 'https://github.com/lucasF286.png',
      lista: times[0].nome 
    },
    {
      id: uuidv4(),
      nome: 'Lucas',
      cargo: 'Desenvolvedor web',
      imagem: 'https://github.com/lucasF286.png',
      lista: times[0].nome 
    },
    {
      id: uuidv4(),
      nome: 'Lucas',
      cargo: 'Desenvolvedor web',
      imagem: 'https://github.com/lucasF286.png',
      lista: times[0].nome 
    }
  ]

  const [colaboradores, setColaborador] = useState(inicial)

  const aoColaboradorAlterado = (colaborador) => {
    setColaborador([...colaboradores, colaborador]);
  }

  function deletarColaborador (id) {
    setColaborador(colaboradores.filter(colaborador => colaborador.id !== id));
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
        time={time}
        mudarCor={mudaCorDoTime}
        nome={time.nome} 
        key={time.nome} 
        cor={time.cor} 
        colaboradores={colaboradores.filter(colaborador => colaborador.lista === time.nome)}
        aoDeletar={ deletarColaborador }
        />)}
    </div>

  );
}

export default App