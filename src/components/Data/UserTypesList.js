import React, { Component } from 'react';
import axios from 'axios';

const UserType = props => (
    <tr>
        <td>{props.userType.usertype}</td>
        <td>{props.userType.quantity}</td>
    </tr>
)

export default class UserTypesList extends Component {
    constructor(props) {
        super(props);

        this.deleteUserType = this.deleteUserType.bind(this)

        this.state = { userTypes: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/userTypes/')
            .then(response => {
                this.setState({ userTypes: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUserType(id) {
        axios.delete('http://localhost:5000/userTypes/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            userTypes: this.state.userTypes.filter(el => el._id !== id)
        })
    }

    userTypeList() {
        return this.state.userTypes.map(currentusertype => {
            return <UserType userType={currentusertype} key={currentusertype._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>User Data</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>User Type</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userTypeList()}
                    </tbody>
                </table>
            </div>
        )
    }
}