import React from 'react';

const Menu = () => {
  const menuItems = [
    { name: 'Pizza Margherita', price: '$12.99' },
    { name: 'Pepperoni Pizza', price: '$14.99' },
    { name: 'BBQ Chicken Pizza', price: '$16.99' },
    // Añadir más elementos del menú según sea necesario
  ];

  return (
    <div className="menu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;