import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    return (
        props.colaboradores.length > 0 && <section className="time" style={{ backgroundColor: hexToRgba(props.cor, '0.6') }}>
            <input type='color' value={props.cor} onChange={e => props.mudarCor(e.target.value, props.time.id)} className='inputCor'/>
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador key={indice} colaborador={colaborador} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} cor={props.cor} aoDeletar={props.aoDeletar}/>)}
                    )
                }
            </div>
        </section>
    )
}

export default Time