import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider, connect} from 'react-redux';
import { BrowserRouter} from 'react-router-dom'
import WebRouter from './Router';
import AppStore from './Store';
const mapStateToProps = (state) =>({});
const mapDispatchToProps = (dispatch) => ({});
const RouteApp = connect(mapStateToProps, mapDispatchToProps)(WebRouter);
function App() {
  return (
          <Provider store={AppStore} >
            <BrowserRouter>
              <RouteApp/>
            </BrowserRouter>
          </Provider>
  );
}

export default App;
