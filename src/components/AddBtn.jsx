import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const AddBtn = ({ addData }) => {
  return (
    <>
      <Button variant="contained" color="primary" onClick={addData}>
        <AddIcon />
      </Button>
    </>
  );
};

export default AddBtn;
