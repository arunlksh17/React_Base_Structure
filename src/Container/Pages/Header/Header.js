import React, {Component} from 'react';
import { NavbarComponent } from '../../../Components/Navbar/Navbar'
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        this.state={
            Component:[
                {name:'Dashboard',link:'/dashboard'}
            ]
        }
    }

    render(){
        const { Component } = this.state;
        return(
            <div>
                <NavbarComponent />
                <div className="row">
                    <div className="col-xs-12 col-md-3">
                        <div className="list-group list-group-flush sidebar" style={{height:'500px',backgroundColor:'#f8f9fa'}}>
                                {Component.map((data)=>{
                                   return <Link to={data.link} className="list-group-item list-group-item-action bg-red">{data.name} </Link>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-9 main_board">
                           {this.props.children}
                    </div>
                </div>
            </div>
            
        );  
    }
}

export default Header;