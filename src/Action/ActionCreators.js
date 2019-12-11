import { DASHBOARD } from './Actions';
import Api from '../Api/index';

let ActionCreator={
    dashboarddata(){

        return async(dispatch) => {
                let userData= await Api.dashboardapi();
                dispatch({type:DASHBOARD,payload:userData});
        }
    }
}

export default ActionCreator;