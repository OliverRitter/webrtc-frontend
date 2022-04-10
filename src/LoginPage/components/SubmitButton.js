import React from 'react';

const SubmitButton = ({ handleSubmitButtonPressed }) => {
  return (
    <button className='login-page_button' onClick={handleSubmitButtonPressed}>
      Name
    </button>
  );
};

export default SubmitButton;
