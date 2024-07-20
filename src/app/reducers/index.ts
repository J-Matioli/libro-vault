import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authorReducer } from '../features/authors/store/reducer/author';
import { genreReducer } from '../features/genres/store/reducer/genre';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  author: authorReducer,
  genre: genreReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
