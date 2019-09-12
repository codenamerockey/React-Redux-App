const initialState = {
  isFetching: false,
  error: '',
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
    default:
      return state;
  }
};
