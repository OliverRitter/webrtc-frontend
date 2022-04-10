import React from 'react';

const UsernameInput = (props) => {
  const { username, setUsername } = props;

  return (
    <input
      placeholder='Enter your name'
      type='text'
      value={username}
      onChange={(event) => {
        setUsername(event.target.value);
      }}
      className='login-page_input'
    />
  );
};

export default UsernameInput;
