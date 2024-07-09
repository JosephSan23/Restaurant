import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Lógica para enviar los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      
      <label htmlFor="date">Fecha:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
      
      <label htmlFor="time">Hora:</label>
      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
      
      <label htmlFor="guests">Número de Invitados:</label>
      <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" max="200" />
      
      <button type="submit">Reservar</button>
    </form>
  );
};

export default ReservationForm;