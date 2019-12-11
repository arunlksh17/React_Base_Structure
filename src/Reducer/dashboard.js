import { DASHBOARD } from '../Action/Actions'

const initialstate = {
    list:[],
}

let reducers=(state=initialstate, action)=>{
    switch (action.type) {
        case DASHBOARD:
            
            return {...state,list:action.payload}
        default:
            return state;
    }
}

export default reducers;