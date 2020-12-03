import React, { Component } from "react";
import List from "@material-ui/core/List";
import AlignItemsList from "./listItem";

class Users extends Component {
  
  render() {
    console.log(this.props.users);
    return (
      <>
            {this.props.users.length > 0 ? (
                <div style={{ width: '40%', border: '1px solid grey', marginRight:'20px' }}>   
          <List>
            {this.props.users.map((user) => (
                <AlignItemsList key={user.id} following={user.following} id={user.id} avatar={user.avatar} email={user.email} first_name={user.first_name} last_name={user.last_name}/>
            ))}
                    </List>
                    </div>
                   
        ) : null}
      </>
    );
  }
}

export default Users
