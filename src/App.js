import React from 'react';
import './scss/components/_reset.scss';
import "./scss/index.scss"
import Main from './Pages/Main';
import { Route, Routes } from "react-router-dom"
import { createStore } from 'redux';               //создаем хранилище
import { Provider } from 'react-redux';
import Slider from './Pages/Slider';
import { reducer } from './redux/reducers';

const store = createStore(reducer)

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/slider" element={<Slider />} />
          </Routes>
        </Provider>
      </div>
    )
  }
}

 
