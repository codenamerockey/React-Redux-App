import React from 'react';

const PlayerCard = ({ players }) => {
  return (
    <div className="ui card  two column grid">
      <div className="image">
        <img src="/images/avatar/large/elliot.jpg" />
      </div>
      <div className="content">
        <div className="header">
          {players.first_name} {players.last_name}
        </div>
        <div className="meta">{players.position}</div>
        <div className="description">
          Elliot is a sound engineer living in Nashville who enjoys playing
          guitar and hanging with his cat.
        </div>
      </div>
      <div className="extra content">
        <a>
          <i aria-hidden="true" className="user icon"></i>
          {players.team.full_name}
        </a>
      </div>
    </div>
  );
};

export default PlayerCard;
