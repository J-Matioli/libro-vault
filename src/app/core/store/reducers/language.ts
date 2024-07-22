import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Data } from "src/app/core/models/data";
import { LanguageActions, LanguageActionTypes, LanguageLoaderActions } from "../actions/language.actions";
import { Language } from "../../models/language";

export interface LanguageState extends EntityState<Language> {     
    data: Data,
    requestLoader: boolean
}

export const adapter = createEntityAdapter<Language>();

export const initialLanguageState = adapter.getInitialState({
    data: {} as Data,
    requestLoader: false
})

export function languageReducer(
    state = initialLanguageState,
    action: LanguageActions | LanguageLoaderActions
): LanguageState {
    switch(action.type) {

        case LanguageActionTypes.LoadedLanguages:
            return adapter.setAll(action.payload.data.dados?.pagina || [], {...state, data: action.payload.data.dados?.dados || ({} as Data) })

        case LanguageActionTypes.RequestLoaderLanguage:
            return {...state, requestLoader: true}

        case LanguageActionTypes.RequestFinishLoaderLanguage:
            return {...state, requestLoader: false}
        default: 
            return state
    }
}

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
  
  } = adapter.getSelectors();