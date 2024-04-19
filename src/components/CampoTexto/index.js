import { useState } from 'react';
import './CamposTexto.css'

const CampoTexto = (props) => {

    const [valor, setValor]= useState('')
    
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='campo__texto'>
            <label>{props.label}</label>
            <input value={props.valor} 
                onChange={aoDigitar} 
                required={props.obrigatorio} 
                placeholder={`${props.placeholder}...`}/>
        </div>
        
    );
};

export default CampoTexto;