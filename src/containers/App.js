import React from 'react';
import './App.css';
import fetchAdalabUsers from '../services/getAdalabUsers';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      AdalabUsersdata: [],
      fetchAdalabUsersOk: false,
      inputValue: '',
    };
    this.getAdalabUsers = this.getAdalabUsers.bind(this);
  }

  componentDidMount() {
    this.getAdalabUsers();
  }

  getAdalabUsers() {
  fetchAdalabUsers()
    .then(data => {
      this.setState({
        AdalabUsersdata: [data],
        fetchAdalabUsersOk: true,
      });
    });
  }

  render() {
        return(
      <div className = "App" >
            <h1>GitHub finder of people on Adalab</h1>
      </div>
    );
}
}

export default App;
