import { HYDRATE } from 'next-redux-wrapper';
import { Reducer } from 'redux';
import { ExampleReduxActionsTypes, ExampleReduxState } from './types';

const initialState: ExampleReduxState = {
  data: [],
  error: false,
  loading: false,
};

const ExampleReduxReducer = (state = initialState, action) => {
  console.log(action.type);
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
