import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = (props) => {

    function favoritar() {
        props.aoFavoritar(props.colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                onClick={() => props.aoDeletar(props.colaborador.id)}
                className='deletar'
            />

            <div className="cabecalho" style={{ backgroundColor: props.cor }}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className='favoritar' />
                {props.colaborador.favorito
                    ? <AiFillHeart {...propsFavorito} color='#FF0000'/>
                    : <AiOutlineHeart {...propsFavorito} />}
            </div>
        </div>
    )
}

export default Colaborador
