import React from 'react';
import logo from '../nba_logo.jpg';

const PlayerCard = ({ players }) => {
  return (
    <div className="ui card  two column grid">
      <div className="image">
        <img src={logo} />
      </div>
      <div className="content">
        <div className="header">
          {players.first_name} {players.last_name}
        </div>
        <div className="meta">{players.position}</div>
        <div className="description">
          <h4>City: {players.team.city}</h4>
          <h4>Conference: {players.team.conference}</h4>
          <h4>Division: {players.team.division}</h4>
        </div>
      </div>
      <div className="extra content">
        <a href="http://www.nba.com" target="_blank">
          <i aria-hidden="true" className="user icon"></i>
          {players.team.full_name}
        </a>
      </div>
    </div>
  );
};

export default PlayerCard;
