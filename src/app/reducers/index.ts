import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authorReducer } from '../features/authors/store/reducer/author';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  author: authorReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
