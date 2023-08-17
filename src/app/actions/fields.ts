import { FieldModel } from 'app/models/FieldModel';
import { useMemo } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { createAction } from 'redux-actions';

export namespace FieldActions {
  export enum Type {
    ADD_FIELD = 'ADD_FIELD',
    ALL_FIELD = 'ALL_FIELD',
  }

  export const authLogin = createAction<PartialPick<FieldModel, 'name' | 'description' >>(Type.ADD_FIELD);
  export const allField = createAction(Type.ALL_FIELD);

}

export type FieldActions = Omit<typeof FieldActions, 'Type'>;
export const useFieldActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = FieldActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as FieldActions;
};
