import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    let i = 1;
    return (
        props.colaboradores.length > 0 && <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador key={i++} nome={colaborador.nome} funcao={colaborador.funcao} imagem={colaborador.imagem} corPrimaria={props.corPrimaria}/>)}
            </div>
        </section>
    )
}

export default Time