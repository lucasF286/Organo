import { useState } from 'react'
import Botao from "../Botao";
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

    const times = [
        "Loud",
        "Furia",
        "vFury"
    ];

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [lista, setLista] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado([
            nome,
            funcao,
            imagem,
            lista
        ])
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>

                <CampoTexto 
                obrigatorio={true}  
                label="Nome" 
                placeholder="Digite seu nome"
                aoAlterado={valor => setNome(valor)}
                value={nome}
                />

                <CampoTexto obrigatorio={true} 
                label="Função" 
                placeholder="Digite sua função"
                aoAlterado={valor => setFuncao(valor)}
                value={funcao}
                />

                <CampoTexto 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                aoAlterado={valor => setImagem(valor)}
                value={imagem}
                />

                <ListaSuspensa 
                obrigatorio={true} 
                label="Times" 
                itens={times}
                aoAlterado={valor => setLista(valor)}
                value={lista}
                />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario