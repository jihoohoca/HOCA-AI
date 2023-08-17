import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { AuthLogin } from 'app/models';

export namespace AuthActions {
  export enum Type {
    AUTH_LOGIN = 'AUTH_LOGIN',
  }

  export const authLogin = createAction<PartialPick<AuthLogin, 'email' | 'password'>>(Type.AUTH_LOGIN);
}

export type AuthActions = Omit<typeof AuthActions, 'Type'>;
export const useAuthActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = AuthActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as AuthActions;
};
