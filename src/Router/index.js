import React, { lazy , Suspense } from 'react';
import { BrowserRouter as Router , Route , Switch  , withRouter} from 'react-router-dom';
import Header from '../Container/Pages/Header/Header';
const Dashboard=lazy(()=>{
    return import('../Container/Pages/Dashboard/Dashboard');
})
 
let _routes=(
    <Router>
        <Header>
            <Switch>
                <Route path="/dashboard" render={()=><Dashboard />} />
            </Switch>
        </Header>
    </Router>
)

const AppRoute = props => {
    return (
        <div><Suspense fallback={<p>Loading</p>}>{_routes}</Suspense></div>
    );
}

export default withRouter(AppRoute);