import { HYDRATE } from 'next-redux-wrapper';
import { ExampleReduxActionsTypes, ExampleReduxState } from './actionTypes';

const initialState: ExampleReduxState = {
  data: [],
  error: false,
  loading: false,
};

const ExampleReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case ExampleReduxActionsTypes.LOAD_EXAMPLE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default ExampleReduxReducer;
