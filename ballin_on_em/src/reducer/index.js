//step 6 import your correct action types for this reducer

import {
  FETCH_NBA_PLAYER_START,
  FETCH_NBA_PLAYER_SUCCESS,
  FETCH_NBA_PLAYER_FAIL
} from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  players: [],
  data: [
    {
      id: 237,
      first_name: 'LeBron',
      last_name: 'James',
      position: 'F',
      team: {
        id: 14,
        abbreviation: 'LAL',
        city: 'Los Angeles',
        conference: 'West',
        division: 'Pacific',
        full_name: 'Los Angeles Lakers',
        name: 'Lakers'
      }
    }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case FETCH_NBA_PLAYER_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_NBA_PLAYER_SUCCESS:
      return {
        ...state,
        players: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_NBA_PLAYER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
