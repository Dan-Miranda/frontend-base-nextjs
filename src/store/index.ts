import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import exampleRedux from './exampleRedux';

const reducers = combineReducers({
  example: exampleRedux,
});

const makeStore = () => createStore(
  reducers,
  undefined,
  devToolsEnhancer({ trace: true }),
);

const storeWrapper = createWrapper(makeStore);

export default storeWrapper;
