import React, { Component } from 'react';
import './UserAdmin.css';
import TableDark from './Elements/TableDark';
import Map from './Elements/Map';
import Container from 'react-bootstrap/Container';

class UserAdmin extends Component{
    render (){
        return (
            <Container>

<div className="admin-content">
            <br></br>
        <h1>User Administration</h1>
        <hr></hr>

<TableDark/>
<Map/>
        </div>
            </Container>
            
      
            
            );
    }
}

export default UserAdmin;