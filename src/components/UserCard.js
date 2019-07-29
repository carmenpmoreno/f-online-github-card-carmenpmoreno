import React from 'react';
import './UserCard.scss';
import PropTypes from 'prop-types';

class UserCard extends React.Component {
    render() {
        const { adalabUserdata } = this.props;
        return (
            <div className="user-card">
                <div className="cardImg-wrapper">
                    <img className="cardImg" src={adalabUserdata.avatar_url} alt={adalabUserdata.name} />
                </div>
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
        );
    }
}

UserCard.propTypes = {
    adalabUserdata: PropTypes.object.isRequired,
}


export default UserCard;