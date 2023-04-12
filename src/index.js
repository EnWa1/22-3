import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from 'components/Context';

const userObj = {
  name: 'Syimyk'
}

const user2 ={
  name: 'Omurbek'
}

const signIn = (user) => {
  console.log(user, 'user');
}
