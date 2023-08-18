import { TodoModel } from 'app/models';
import { FieldModel } from 'app/models/FieldModel';

export interface RootState {
  todos: RootState.TodoState;
  auths: RootState.AuthState;
  singup: RootState.SingupState
  fields: RootState.FieldState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type AuthState = {
    email: string;
    password: string;
  };

  export type SingupState = {
    email: string;
    password: string;
  };

  export type FieldState =  FieldModel[];
}


