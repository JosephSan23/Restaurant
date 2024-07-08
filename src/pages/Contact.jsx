import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contacto</h1>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message"></textarea>
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;