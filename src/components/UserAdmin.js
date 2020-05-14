import React, { Component } from 'react';
import './UserAdmin.css';
import Row from 'react-bootstrap/Row';
import ProfilesList from './Data/ProfilesList';
import Container from 'react-bootstrap/Container';

class UserAdmin extends Component {
    render() {

        return (
            <Container>

                <div className="admin-content">
                    <br></br>
                    <h1>User Administration</h1>
                    <hr></hr>

                    <Row>
                        <ProfilesList />
                    </Row>
                </div>
            </Container>



        );
    }
}

export default UserAdmin;