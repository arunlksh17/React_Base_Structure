import React , {Component} from 'react';
import ActionCreators from '../../../Action/ActionCreators'
import {connect} from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Input } from '../../../Components/Forms/Form'

class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'Arun',
            data:[]
        }
    }
    componentDidMount=async()=>{
        await this.props.DashboardData();
        let data=this.props.dashboardReducer;
        this.setState({data:data})
    }

    submit=(values)=>{
        alert(JSON.stringify(values));
    }

    render(){
        const { name , data } = this.state;
        const { handleSubmit } =this.props;
        return(
            <form onSubmit={handleSubmit(this.submit)}>
                <Field component={Input} name="firstname" type="text" placeHolder="sxx" className="" label="First Name" />
                <button type="submit" >Save</button>
            </form>
        );
    }
}

const mapStateToProps=(state)=>({
    dashboardReducer:state.dashboardReducer
})

const mapDispatchToProps=(dispatch)=>({
    DashboardData : () => dispatch(ActionCreators.dashboarddata())
})

const dashboardForm=reduxForm({
    form:'dashboardformcomponent',
})(Dashboard);

export default connect(mapStateToProps,mapDispatchToProps)(dashboardForm);