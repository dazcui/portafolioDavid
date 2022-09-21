import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'


const Contact = () => {
  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm('service_mxh611i', 'template_eztzt4k', e.target, 'NhWC0cOQ00TtIWPPC')
      .then(res => { console.log(res) })
      .catch(err => console.log(err))
  }

  return (
    <div className='contact'>
      <div className="contact__img">
        <img src="./img/email_rev3.png" alt="" />
      </div>
      <form className='contact__form' onSubmit={sendEmail} >
        <div className="contact__name">
          <label name="name">Nombre: </label>
          <input type="text" name='name' placeholder='nombre' />
        </div>
        <div className="contact__correo">
          <label name="correo">Correo: </label>
          <input type="text" name='correo' placeholder='correo electronico' />
        </div>
        <div className="contact__texto">
          <label name="texto">Comentarios: </label>
          <textarea type="text"  name='texto' cols='50' rows='7' placeholder='escribe tus comentarios'></textarea>
        </div>
        <button className='contact__button' type='submit'>enviar</button>
      </form>
    </div>
  )
}

export default Contact