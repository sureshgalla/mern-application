import React from 'react';
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import ItemModal  from './Components/ItemModal';

import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
          <center>
            <h1>Hai This Is A MERN Stack Application</h1>
          </center>
          <ItemModal/>
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
