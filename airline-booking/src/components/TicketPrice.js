import React from 'react';

const TicketPrice = ({ prices }) => {
  return (
    <div className="ticket-price mb-4">
      <h4>Ticket Prices:</h4>
      <ul className="list-group">
        <li className="list-group-item">First Class: ${prices.firstClass}</li>
        <li className="list-group-item">Business Class: ${prices.businessClass}</li>
        <li className="list-group-item">Economy Class: ${prices.economyClass}</li>
      </ul>
    </div>
  );
};

export default TicketPrice;
