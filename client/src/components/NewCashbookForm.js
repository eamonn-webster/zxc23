import React from 'react';

const NewCashbookForm = ({onNewCashbook}) => {
  let title, opening_value;
  const submit = e => {
    e.preventDefault();
    onNewCashbook(title.value, opening_value.value);
    title.value = '';
    opening_value.value = '';
    title.focus()
  };

  return (
    <form onSubmit={submit}>
      <p>
        <input ref={input => title = input}
               type="text"
               placeholder="Title..." required/>
      </p>
      <p>
        <input ref={input => opening_value = input}
               type="text"
               placeholder="Opening..." required/>
      </p>
      <button>Add</button>
    </form>
  )
};

export default NewCashbookForm;
