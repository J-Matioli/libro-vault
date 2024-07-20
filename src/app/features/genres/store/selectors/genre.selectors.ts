import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGenres from '../reducer/genre';


export const selectGenresState = 
      createFeatureSelector<fromGenres.GenreState>("genre");

export const selectGenres = createSelector(
    selectGenresState,
    fromGenres.selectAll
)

export const selectGenresData = createSelector(
    selectGenresState,
    state => state.data
)

export const selectGenresLoader = createSelector(
    selectGenresState,
    state => state.requestLoader
)

export const selectGenresAsOption = createSelector(
    selectGenres,
    genre => genre.map(v => ({value: v.id, viewValue: v.nome}))
)