import React from 'react';

const Cashbook = ({cashbook, onRemoveCashbook, editingCashbook}) =>
  <div className="cashbook" key={cashbook.id}>
    <h4>{cashbook.title}</h4>
    <p>{cashbook.opening_value}</p>
    <button onClick={() => editingCashbook(cashbook.id)}>Edit</button>
    <button onClick={() => onRemoveCashbook(cashbook.id)}>Erase</button>
    <hr/>
  </div>;

export default Cashbook;
