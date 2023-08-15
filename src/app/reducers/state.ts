import { TodoModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  auths: RootState.AuthState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type AuthState = {};
}


