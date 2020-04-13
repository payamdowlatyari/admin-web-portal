import React, { Component } from 'react';
import Dashboard from './Elements/Dashboard'; 

class UserAdmin extends Component{
    render (){
        return (
            
        <div>
        <h1>User Administration</h1>
        <hr></hr>

        <Dashboard/>
        </div>
            
            );
    }
}

export default UserAdmin;