import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../resources/logo.svg';
import UsernameInput from './components/UsernameInput';
import SubmitButton from './components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { setUsername } from '../store/actions/dashboardActions';
import { registerNewUser } from '../utils/wssConnection/wssConnection';
import './LoginPage.css';

const LoginPage = ({ saveUsername }) => {
  const [user, setUser] = useState('');

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmitButtonPressed = () => {
    registerNewUser(user);
    dispatch(setUsername(user));
    history.push('/dashboard');
  };

  return (
    <div className='login-page_container background_main_color'>
      <div className='login-page_login_box '>
        <img className='login-page_logo_image' src={logo} alt='VideoTalker' />

        <h2>Get on Board</h2>

        <UsernameInput username={user} setUsername={setUser} />
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
      </div>
    </div>
  );
};

export default LoginPage;
