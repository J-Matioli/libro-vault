import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLanguages from '../reducers/language';


export const selectLanguagesState = 
      createFeatureSelector<fromLanguages.LanguageState>("language");

export const selectLanguages = createSelector(
    selectLanguagesState,
    fromLanguages.selectAll
)

export const selectLanguagesData = createSelector(
    selectLanguagesState,
    state => state.data
)

export const selectLanguagesLoader = createSelector(
    selectLanguagesState,
    state => state.requestLoader
)

export const selectLanguagesAsOption = createSelector(
    selectLanguages,
    language => language.map(v => ({value: v.id, viewValue: v.nome}))
)