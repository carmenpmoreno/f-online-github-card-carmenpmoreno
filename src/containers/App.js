import React from 'react';
import './App.scss';
// import fetchAdalabUsers from '../services/getAdalabUsers';
import mockAdalabUsers from '../services/getAdalabUsers';

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

  handleOptions(event) {
    // const adalabUser = event.currentTarget.value;
    // const AdalabUserUrl = `https://api.github.com/users/${adalabUser}`;
    // fetch(AdalabUserUrl)
    //   .then(response => response.json())
    //   .then(AdalabUserInfo => {
    //     this.setState({
    //       adalabUserdata: AdalabUserInfo,
    // fetchAdalabUserOk: true
    //     });
    //   });
    const mockAdalabUser = {
      "login": "AilatanGH",
      "id": 26969648,
      "node_id": "MDQ6VXNlcjI2OTY5NjQ4",
      "avatar_url": "https://avatars2.githubusercontent.com/u/26969648?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/AilatanGH",
      "html_url": "https://github.com/AilatanGH",
      "followers_url": "https://api.github.com/users/AilatanGH/followers",
      "following_url": "https://api.github.com/users/AilatanGH/following{/other_user}",
      "gists_url": "https://api.github.com/users/AilatanGH/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/AilatanGH/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/AilatanGH/subscriptions",
      "organizations_url": "https://api.github.com/users/AilatanGH/orgs",
      "repos_url": "https://api.github.com/users/AilatanGH/repos",
      "events_url": "https://api.github.com/users/AilatanGH/events{/privacy}",
      "received_events_url": "https://api.github.com/users/AilatanGH/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Natalia Guaita",
      "company": null,
      "blog": "",
      "location": "Madrid",
      "email": null,
      "hireable": null,
      "bio": "\r\nCurrent adalaber | Graphic Designer | Front-end Junior",
      "public_repos": 12,
      "public_gists": 0,
      "followers": 10,
      "following": 1,
      "created_at": "2017-04-06T14:26:35Z",
      "updated_at": "2019-05-06T09:00:14Z"
    }
    this.setState({
      adalabUserdata: mockAdalabUser,
      fetchAdalabUserOk: true
    });
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
      adalabUsersdata: mockAdalabUsers,
      fetchAdalabUsersOk: true,
    });
  }

  render() {
    const { adalabUsersdata, fetchAdalabUsersOk, adalabUserdata, fetchAdalabUserOk } = this.state;
    console.log(adalabUserdata);
    return (
      <div className="App" >
        <h1>GitHub finder of people on Adalab</h1>
        <label htmlFor="users" className="users-finder__label">Selecciona una usuaria</label>
        <select
          id="users"
          className="users-finder__select"
          name="users"
          onChange={this.handleOptions}
        >
          <option className="users-finder__label-option">Selecciona una usuaria</option>
          {fetchAdalabUsersOk === true
            ?
            adalabUsersdata.map(adalabUser =>
              <option
                className="users-finder__option"
                key={adalabUser.id}
                value={adalabUser.login}
              >{adalabUser.login}
              </option>
            )
            : <option>Loading ...</option>
          }
        </select>
        {fetchAdalabUserOk === true
          ?
          <div className="user-card">
            <ul className="user-card__list-up">
              <li className="user-card__item-up">@{adalabUserdata.login}</li>
              <li className="user-card__item-up">{adalabUserdata.name}</li>
              <li className="user-card__item-up">{adalabUserdata.location}</li>
            </ul>
            <ul className="user-card__list-down">
              <div className="user-card__items-wrapper">
                <li className="user-card__item-down">{adalabUserdata.public_repos}</li>
                <li className="user-card__item-down">Repos</li>
              </div>
              <div className="user-card__items-wrapper">
                <li className="user-card__item-down">{adalabUserdata.followers}</li>
                <li className="user-card__item-down">Followers</li>
              </div>
              <div className="user-card__items-wrapper">
                <li className="user-card__item-down">{adalabUserdata.following}</li>
                <li className="user-card__item-down">Following</li>
              </div>
            </ul>
          </div>

          : (<p>logo futuro de gitbub</p>)
        }
      </div>
    );
  }
}

export default App;
