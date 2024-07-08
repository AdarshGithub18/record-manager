import React, { useState } from 'react';
import AddBtn from './AddBtn';
import TextField from '@mui/material/TextField';

const Inputs = ({ setData, data }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function addData() {
    setData([...data, { name, email }]);
    setName('');
    setEmail('');
  }
  return (
    <>
      <div className="input-container">
        <TextField
          id="outlined-name"
          label="Name"
          variant="outlined"
          className="text-field"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          id="outlined-name"
          label="Email"
          variant="outlined"
          className="text-field"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <AddBtn addData={addData} />
      </div>
    </>
  );
};

export default Inputs;
