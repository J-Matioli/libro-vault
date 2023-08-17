import { userReducer } from './user';

import * as fromUser from './user';

export interface CoreModuleState {
  user: fromUser.State;  
}

export interface CoreState {
  coreState: CoreModuleState
}

export const reducers = {
  user: userReducer
};