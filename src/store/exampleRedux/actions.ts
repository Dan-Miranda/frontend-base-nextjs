import { ExampleReduxActionsTypes, ExampleReduxState } from './types';

export const insertExample = (example: ExampleReduxState) => {
  console.log(example);
  return {
    type: ExampleReduxActionsTypes.LOAD_EXAMPLE,
    payload: example,
  };
};
export default {};
