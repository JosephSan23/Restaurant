import React from 'react';

const Home = () => {
    return (
      <div className="home">
        <section className="hero">
          <img src="https://washington.org/sites/default/files/family-dining-outdoors-with-young-child-at-bluejacket_ddc-photo.jpg" alt="Delicious Food" />
          <h1>Bienvenidos a HomeSlice Pizza</h1>
          <p>Descubre el sabor auténtico de nuestras pizzas artesanales.</p>
        </section>
        <section className="features">
          <div className="feature">
            <h2>Menú</h2>
            <p>Explora nuestro delicioso menú.</p>
          </div>
          <div className="feature">
            <h2>Reservaciones</h2>
            <p>Reserva una mesa fácilmente en línea.</p>
          </div>
          <div className="feature">
            <h2>Nosotros</h2>
            <p>Conoce más sobre nuestra historia y filosofía.</p>
          </div>
        </section>
      </div>
    );
  };
  

export default Home;