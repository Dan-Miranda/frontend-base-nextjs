import { combineReducers } from 'redux';
import exampleRedux from './exampleRedux';
import { ExampleReduxState } from './exampleRedux/types';

export interface ApplicationState {
  example: ExampleReduxState
}
// ## Deixar a interface em sincronia coms os reducers combinados ##
const rootReducer = () => combineReducers({
  example: exampleRedux,
});

export default rootReducer;
