import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user';

export interface CoreModuleState {
 
}

export const reducers: ActionReducerMap<CoreModuleState> = {
  user: userReducer
};