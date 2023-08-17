import { TodoModel } from 'app/models';
import { FieldModel } from 'app/models/FieldModel';

export interface RootState {
  todos: RootState.TodoState;
  auths: RootState.AuthState;
  fields: RootState.FieldState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type AuthState =  {};
  export type FieldState =  FieldModel[];
}


