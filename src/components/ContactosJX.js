import React from 'react'
import PropTypes from 'prop-types';
import EstadoJx from './Estado.js';

const ContactosJX = (props) => {
return (
    <div>
        <h1>Nombre: {props.name} </h1>
        <h1>Apellido: {props.last_name}</h1>
        <h1>email: {props.email}</h1>
    </div>
  )
}
<EstadoJx/>
ContactosJX.propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string
};

export default ContactosJX;