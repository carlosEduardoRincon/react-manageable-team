import './CamposTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className='campo__texto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
        
    );
};

export default CampoTexto;