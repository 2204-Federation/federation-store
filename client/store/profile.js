import axios from 'axios';

const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const editProfile = (user) => ({
  type: UPDATE_PROFILE,
  user,
});

export const updateProfile = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${user.id}`, user);
      dispatch(editProfile(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = {};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return action.user;
    default:
      return state;
  }
}