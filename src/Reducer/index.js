import { combineReducers } from 'redux';
import dashboardReducer from './dashboard';
import { reducer as reduxFormReducer } from 'redux-form';

let RootReducer=combineReducers({
    dashboardReducer:dashboardReducer,
    form: reduxFormReducer,
})

export default RootReducer;