import { User } from '../../models/user';
import { UserActionTypes, UserActions } from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State {
  user: User
}

export const initialUserState = {} as State;

  export function userReducer(
    state = initialUserState,
    action: UserActions
  ): State {
    switch (action.type) {

      case UserActionTypes.LoadedUser:
        {
          return { ...state, ...action.payload.data }
        }

      default:
        return state
    }
  }