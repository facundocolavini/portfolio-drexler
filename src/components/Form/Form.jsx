import React from 'react';
import './Form.scss'
import { FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

const Form = () => {
  return (
    <div className='Form'>
        <div className='container'>
            <div className='formulario'>
                <h2 className='title'>¡Hablemos!</h2>
                <form className='form'>
                    <input type="text" placeholder='Nombre' name='user_name' />
                    <input type="text" placeholder='Dirección de correo*' name='user_email' />
                    <input type="text" placeholder='Número de celular' name='user_phone' />
                    <textarea className='p-2' rows='5' placeholder='Escribe aquí tu consulta' name='message' />
                    <button className='btn'>Enviar</button>
                </form>
            </div>
            <div className='datos'>
                <div className='d-flex align-items-center mb-3'>
                    <FaRegEnvelope />
                    <span className='ms-3'>drexlersylvain97@gmail.com</span>
                </div>
                <div className='d-flex align-items-center'>
                    <FaPhoneAlt />
                    <div className='d-flex flex-column ms-3'>
                        <span>+549 376 420 4268</span>
                        <span>+549 376 488 3724</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Form;
