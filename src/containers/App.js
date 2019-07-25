import React from 'react';
import './App.css';
// import fetchAdalabUsers from '../services/getAdalabUsers';
import mockAdalabUsers from '../services/getAdalabUsers';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adalabUsersdata: {},
      fetchAdalabUsersOk: false,
      inputValue: '',
    };
    this.getAdalabUsers = this.getAdalabUsers.bind(this);
  }

  componentDidMount() {
    this.getAdalabUsers();
  }

  getAdalabUsers() {
    // fetchAdalabUsers()
    //   .then(adalabUsers => {
    this.setState({
      adalabUsersdata: { mockAdalabUsers },
      fetchAdalabUsersOk: true,
    });
  }

  render() {
    const adalabUsers = this.state.adalabUsersdata.mockAdalabUsers;
    console.log(adalabUsers);
    return (
      <div className="App" >
        <h1>GitHub finder of people on Adalab</h1>
        <ul>
          {this.state.fetchAdalabUsersOk === true
            ? (adalabUsers.map(adalabUser => <li key={adalabUser.id}>{adalabUser.login}</li>))
            : (<p>Loading ...</p>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
