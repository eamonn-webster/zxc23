import React from 'react';


const Cashbook = ({cashbook, onRemoveCashbook=f=>f, editingCashbook=f=>f}) =>
  <div className="cashbook" key={cashbook.id}>
    <h4>{cashbook.title}</h4>
    <p>{cashbook.opening_value}</p>
    <button onClick={() => onRemoveCashbook(cashbook.id)}>Erase</button>
    <button onClick={() => editingCashbook(cashbook.id)}>Edit</button>
    <hr/>
  </div>;

export default Cashbook;

