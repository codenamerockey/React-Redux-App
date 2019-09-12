import axios from 'axios';

//step 5 create your action types and action creators and your Thunk functions.

export const FETCH_NBA_PLAYER_START = 'FETCH_NBA_PLAYER_START';

export const getPlayer = () => dispatch => {
  console.log('I am from the nba start action');
  dispatch({ type: FETCH_NBA_PLAYER_START });
};
