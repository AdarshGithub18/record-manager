import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const DeleteBtn = ({ removeItem }) => {
  return (
    <>
      <Button
        variant="contained"
        color="error"
        className="dlt-btn"
        onClick={removeItem}
      >
        <DeleteIcon />
      </Button>
    </>
  );
};

export default DeleteBtn;
