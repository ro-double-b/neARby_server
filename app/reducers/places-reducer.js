import PLACES_COLLECTION from '../actions/index';

const initialState = {
  collection: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PLACES_COLLECTION:
    console.log('in reducer', action);
      return { ...state,
      collection: action.payload };
    default:
    console.log('defaulting');
      return state;
  }
};