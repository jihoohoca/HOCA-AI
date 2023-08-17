import { FieldActions } from 'app/actions';
import { FieldModel } from 'app/models/FieldModel';
import { handleActions } from 'redux-actions';
import { RootState } from './state';

const initialState: RootState.FieldState = [
  {
    id: '',
    name: '',
    description: ''
  }
];

export const fieldReducer = handleActions<RootState.FieldState, FieldModel>(
  {
    [FieldActions.Type.ADD_FIELD]: (state, action) => {
      if (action.payload && action.payload.name) {
        return [
          {
            name: action.payload.name,
            description: action.payload.description,
            id: action.payload.id
          },
          ...state
        ];
      }
      return state;
    },
    [FieldActions.Type.ALL_FIELD]: (state: any, action) => {
      if (action.payload) {
        return {
          ...state,
          fields: [...state, action.payload]
        };
      }
      return state;
    }
  },
  initialState
);
