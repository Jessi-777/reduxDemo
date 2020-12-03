import React from 'react'
import './App.css';
import Users from './users';
import { connect } from "react-redux";
import { addUsers} from "./actions";


class App extends React.Component {
 
  async componentDidMount() {
    let result = await fetch("https://reqres.in/api/users?page=2");
      let alldata = await result.json();
      let userData = alldata.data.map(user=>({...user, following:false}))
      
      this.props.addUsers(userData)
  }
  render() {
    console.log(this.props.followUsers, this.props.users)
    return (
      <div className="App">
        <h1>Hello</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px' }}>
          
            <Users users={this.props.users} />
          
            <Users users={this.props.followUsers} />
          
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    followUsers: state.followUsers,
    users:state.users
  }
}

export default connect(mapStateToProps,{addUsers})(App)
