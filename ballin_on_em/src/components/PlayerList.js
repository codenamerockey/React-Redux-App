import React from 'react';
import { connect } from 'react-redux';
import { getPlayer } from '../actions';

const PlayerList = ({ state, getPlayer }) => {
  console.log(state);
  return (
    <div>
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
