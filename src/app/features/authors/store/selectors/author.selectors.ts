import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthors from '../reducer/author';


export const selectAuthorsState = 
      createFeatureSelector<fromAuthors.AuthorState>("author");

export const selectAuthors = createSelector(
    selectAuthorsState,
    fromAuthors.selectAll
)

export const selectAuthorsData = createSelector(
    selectAuthorsState,
    state => state.data
)

export const selectAuthorsLoader = createSelector(
    selectAuthorsState,
    state => state.requestLoader
)

export const selectAuthorsAsOption = createSelector(
    selectAuthors,
    author => author.map(v => ({value: v.id, viewValue: v.nome}))
)