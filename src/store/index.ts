import { createWrapper } from 'next-redux-wrapper';
import {
  applyMiddleware, CombinedState, createStore, Reducer, Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer, { ApplicationState } from './rootReducer';

// const middlewares = [thunkMiddleware];

const makeStore = () => {
  const store: Store<Reducer<CombinedState<ApplicationState>>> = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(...middlewares)),
    composeWithDevTools(),
  );
  return store;
};

const storeWrapper = createWrapper(makeStore);

export default storeWrapper;
