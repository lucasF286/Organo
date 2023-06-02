import './Campo.css'

const Campo = ({type = 'text',label, value, placeholder, aoAlterado, obrigatorio = false}) => {

    const aoDigitado = (e) => {
        aoAlterado(e.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo