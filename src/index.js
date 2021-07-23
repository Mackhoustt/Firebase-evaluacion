import React from 'react';
import ReactDOM from 'react-dom';
import {Usuario} from './components/Usuarios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import {store} from './store/store'

ReactDOM.render(
  <Provider store={store}>
  < Usuario/>
  </Provider>,
  document.getElementById('root')
);


