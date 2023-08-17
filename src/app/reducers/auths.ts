import { AuthActions } from 'app/actions';
import { AuthModel } from 'app/models';
import { RootState } from './state';
import { handleActions } from 'redux-actions';

const initialState: RootState.AuthState = {
  name: '',
  email: ''
};


export const authReducer = handleActions<RootState.AuthState, AuthModel>(
  {
    [AuthActions.Type.AUTH_LOGIN]: (state, action) => {
      if (action.payload && action.payload.name) {
        return [
          {
            name: action.payload.name,
            email: action.payload.email
          }
        ];
      }
      return state;
    }
  },
  initialState
);
