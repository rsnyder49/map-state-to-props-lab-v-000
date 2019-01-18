import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, idx) => <li key={idx}> {user.username} </li>)
    return (
      <div>
        <ul>
          Users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

export default Users
