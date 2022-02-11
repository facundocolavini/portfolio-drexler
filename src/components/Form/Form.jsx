import React, { useRef, useState } from 'react';
import './Form.scss'
import { FaRegEnvelope, FaPhoneAlt, FaCheckDouble } from "react-icons/fa";
import emailjs from 'emailjs-com';


const Form = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmailMessage', 'template_zml592e', formRef.current, 'user_SaleF7niqzbFhdATmLyq0')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });

    }

  return (
    <div className='Form'>
        <div className='container'>
            <div className='formulario'>
                <h2 className='title'>¡Hablemos!</h2>
                <form className='form' ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Nombre' name='user_name' />
                    <input type="text" placeholder='Dirección de correo*' name='user_email' />
                    <input type="text" placeholder='Número de celular' name='user_phone' />
                    <input type="text" placeholder='Asunto del mail' name='subject' />
                    <textarea className='p-2' rows='5' placeholder='Escribe aquí tu consulta' name='message' />
                    <button className='btn button' data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Correo enviado con éxito">Enviar</button>
                </form>
                {done && <FaCheckDouble color='green' className='pop' />}
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
