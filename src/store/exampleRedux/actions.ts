import { ExampleReduxActionsTypes, ExampleReduxState } from './actionTypes';

export const insertExample = (example: ExampleReduxState) => ({
  type: ExampleReduxActionsTypes.LOAD_EXAMPLE,
  payload: example,
});
export default {};
