import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'


console.log(store.getState())

//Muista hyvä debuggaustapa, että <App /> tilalle <div></div> ja konsoli auki selaimessa
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  
