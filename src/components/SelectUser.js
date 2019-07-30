import React from 'react';
import './SelectUser.scss';

class SelectUser extends React.Component {
  render() {
    const { adalabUsersdata, fetchAdalabUsersOk, handleOptions } = this.props;
    return (
      <div className="users-finder__wrapper">
        <label htmlFor="users" className="users-finder__label">Selecciona una usuaria</label>
        <select
          id="users"
          className="users-finder__select"
          name="users"
          onChange={handleOptions}
          defaultValue="Selecciona una usuaria"
        >
          <option className="users-finder__label-option" disabled hidden>Selecciona una usuaria</option>
          {fetchAdalabUsersOk === true
            ?
            adalabUsersdata
              .map(adalabUser => {
                return {
                  login: adalabUser.login.toLowerCase(),
                  id: adalabUser.id
                }
              })
              .sort(function (a, b) {
                if (a.login > b.login) {
                  return 1;
                }
                if (a.login < b.login) {
                  return -1;
                }
                return 0;
              })
              .map(adalabUser =>
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
      </div>
    );

  }
}

export default SelectUser;