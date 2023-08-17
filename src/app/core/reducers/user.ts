import { createReducer } from '@ngrx/store';
import { User } from '../models/user';

export const userFeatureKey = 'user';

export interface State {
  user: User
}

export const initialUserState = {} as State;

export const userReducer = createReducer(
  initialUserState,

)