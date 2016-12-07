import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

// To Test

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    store = configureStore({ currentUser: window.currentUser });
  } else {
    store = configureStore();
  }

  // To test
  window.store = store;

  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
