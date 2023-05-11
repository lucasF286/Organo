import { useState } from 'react'
import Botao from "../Botao";
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = () => {

    const times = [
        "Loud",
        "Furia",
        "vFury"
    ];

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault();
        console.log("Formulario submetido com sucesso!", nome, funcao, imagem, time);
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>

                <CampoTexto 
                obrigatorio={true}  
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto obrigatorio={true} 
                label="Função" 
                placeholder="Digite sua função"
                valor={funcao}
                aoAlterado={valor => setFuncao(valor)} 
                />

                <CampoTexto 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                obrigatorio={true} 
                label="Times" 
                itens={times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario