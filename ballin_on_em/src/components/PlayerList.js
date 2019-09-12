import React from 'react';
import { connect } from 'react-redux';
import { getPlayer } from '../actions';
import PlayerCard from './PlayerCard';

const PlayerList = ({ state, getPlayer }) => {
  // you should always have controlled way to call your functions that send your actions to the reducer
  return (
    <div>
      {state.players.map(player => {
        return <PlayerCard players={player} />;
      })}
      <button onClick={() => getPlayer()}>Get Player Info</button>
    </div>
  );
};

//step 4 map your state to props so this component knows what state it needs to use from our state tree.
const mapStateToProps = state => {
  return {
    state: state
  };
};

//Step 3 Connect your component to the redux store
export default connect(
  mapStateToProps,
  { getPlayer }
)(PlayerList);
