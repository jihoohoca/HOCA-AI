import { AuthActions } from 'app/actions';
import { AuthLogin } from 'app/models';
import { RootState } from './state';
import { handleActions } from 'redux-actions';

const initialState: RootState.AuthState = {
  email: '',
  password: ''
};

export const authReducer = handleActions<RootState.AuthState, AuthLogin>(
  {
    [AuthActions.Type.AUTH_LOGIN]: (state, action) => {
      if (action.payload) {
        state.email = action.payload.email || '';
        state.password = action.payload.password || '';
      }
      return state;
    }
  },
  initialState
);
