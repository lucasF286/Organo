import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = () => {

    const times = [
        "Loud",
        "Furia",
        "vFury"
    ];

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Função" placeholder="Digite sua função" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario