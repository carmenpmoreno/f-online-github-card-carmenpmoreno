import React from 'react';
import './App.scss';
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
    // .then(adalabUsers => {
    //   this.setState({
    //     adalabUsersdata: { adalabUsers },
    //     fetchAdalabUsersOk: true,
    //   });
    // });

    this.setState({
      adalabUsersdata: { mockAdalabUsers },
      fetchAdalabUsersOk: true,
    });
  }

  render() {
    // const adalabUsers = this.state.adalabUsersdata.adalabUsers;
    const adalabUsers = this.state.adalabUsersdata.mockAdalabUsers;
    console.log(adalabUsers);
    return (
      <div className="App" >
        <h1>GitHub finder of people on Adalab</h1>
        <label htmlFor="users" className="users-finder__label">Selecciona una usuaria</label>
        <select id="users" className="users-finder__select" name="users">
          <option className="users-finder__option">Selecciona una usuaria</option>
          {this.state.fetchAdalabUsersOk === true
            ? (adalabUsers.map(adalabUser => 
            <option className="users-finder__option" 
            key={adalabUser.id}>{adalabUser.login}</option>
            ))
            : (<option>Loading ...</option>)
          }
        </select>
      </div>
    );
  }
}

export default App;
