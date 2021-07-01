export enum ExampleReduxActionsTypes {
  LOAD_EXAMPLE = '@exampleRedux/LOAD_EXAMPLE',
}

export interface ExampleReduxInterface {
  id: number,
  example: string
}

export interface ExampleReduxState {
  data: Array<ExampleReduxInterface>,
  loading: boolean,
  error: boolean
}
