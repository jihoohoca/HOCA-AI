import { TodoModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  auths: RootState.AuthState;
  singup: RootState.SingupState
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
  
}


