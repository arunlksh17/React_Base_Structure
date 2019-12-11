import RootReducer from '../Reducer/index';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const logger = (store) => (next) => (action) => {
    console.log(action)
	return next(action);
} 

const AppStore=createStore(
    RootReducer,
    applyMiddleware(logger,thunk)
);

export default AppStore;