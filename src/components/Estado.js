import React, { useState } from 'react'

const EstadoJx = () => {

const [argument,setArgument] = useState("Null");

const Conectado = () =>{
    setArgument = "Contacto En Línea"
    setArgument = argument;
}

const Desconectado = () =>{
    setArgument = "Contacto No Disponible"
    setArgument = argument;
}


return (

        
    <div>

        <h1>Mensaje:{argument}</h1>
        <button onClick={Conectado}>ONLINE</button> 
        <button onClick={Desconectado}>OFFLINE</button>
    </div>


    )
};

export default EstadoJx