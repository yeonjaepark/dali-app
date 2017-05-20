import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_MEMBERS: 'FETCH_MEMBERS',
  FETCH_MEMBER: 'FETCH_MEMBER',
};

const ROOT_URL = 'http://mappy.dali.dartmouth.edu/members.json';

export function fetchMembers() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}`).then((response) => {
      dispatch({ type: 'FETCH_MEMBERS', payload: response.data });
    }).catch((error) => {
      dispatch({ type: 'FETCH_MEMBERS_FAIL', payload: error });
    });
  };
}

export function fetchMember(i) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}`)
    .then((response) => {
      dispatch({ type: 'FETCH_MEMBER', payload: response.data[i] });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}
