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
import { languageReducer } from '../core/store/reducers/language';
import { publisherReducer } from '../features/publishers/store/reducer/publisher';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  author: authorReducer,
  genre: genreReducer,
  language: languageReducer,
  publisher: publisherReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
