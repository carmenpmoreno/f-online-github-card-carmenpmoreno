import React from 'react';
import './App.scss';
import logo from "../images/logo-adalab.png";
import SelectUser from '../components/SelectUser.js';
import fetchAdalabUsers from '../services/getAdalabUsers';
import UserCard from '../components/UserCard';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adalabUsersdata: [],
      fetchAdalabUsersOk: false,
      adalabUserdata: {},
      fetchAdalabUserOk: false
    };
    this.getAdalabUsers = this.getAdalabUsers.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  componentDidMount() {
    this.getAdalabUsers();
  }

  getAdalabUsers() {
    fetchAdalabUsers()
    .then(adalabUsers => {
      this.setState({
        adalabUsersdata: adalabUsers,
        fetchAdalabUsersOk: true,
      });
    });
  }

  handleOptions(event) {
    const adalabUser = event.currentTarget.value;
    const AdalabUserUrl = `https://api.github.com/users/${adalabUser}`;

    fetch(AdalabUserUrl)
      .then(response => response.json())
      .then(AdalabUserInfo => {
        this.setState({
          adalabUserdata: AdalabUserInfo,
    fetchAdalabUserOk: true
        });
      });
  }

  render() {
    const { adalabUsersdata, fetchAdalabUsersOk, adalabUserdata, fetchAdalabUserOk } = this.state;
    return (
      <div className="App" >
        <header>
          <h1 className="hidden">GitHub finder of people on Adalab</h1>
        </header>
        <main className="main-section">
          <SelectUser
            adalabUsersdata={adalabUsersdata}
            fetchAdalabUsersOk={fetchAdalabUsersOk}
            handleOptions={this.handleOptions}
          />
          {fetchAdalabUserOk === true
            ? <UserCard
              adalabUserdata={adalabUserdata}
            />
            : (
            <div className="main__default-image-wrapper">
              <i className="fab fa-github" alt="github logo" />
            </div>
            )
          }
        </main>
        <footer className="footer-section">
            <img className="footer-section__logo" src={logo} alt="adalab logo" />
        </footer>
      </div>
    );
  }
}

export default App;
