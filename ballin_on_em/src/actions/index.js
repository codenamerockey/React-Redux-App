import axios from 'axios';

//step 5 import axios and create your action types and action creators and your actions inside your Thunk function. Your Thunk function is a function created and returned by another function . Inside your thunk function you dispatch your action objects.

export const FETCH_NBA_PLAYER_START = 'FETCH_NBA_PLAYER_START';
export const FETCH_NBA_PLAYER_SUCCESS = 'FETCH_NBA_PLAYER_SUCCESS';
export const FETCH_NBA_PLAYER_FAIL = 'FETCH_NBA_PLAYER_FAIL';

export const getPlayer = () => dispatch => {
  console.log('I am from the nba start action');
  dispatch({ type: FETCH_NBA_PLAYER_START });
  axios
    .get('https://www.balldontlie.io/api/v1/players')
    .then(res =>
      dispatch({ type: FETCH_NBA_PLAYER_SUCCESS, payload: res.data.data })
    )
    .catch(err => dispatch({ type: FETCH_NBA_PLAYER_FAIL, payload: err }));
};
