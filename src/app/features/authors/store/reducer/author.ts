import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Author } from "src/app/core/models/author";
import { AuthorActionTypes, AuthorActions } from "../actions/author.actions";
import { Data } from "src/app/core/models/data";
import { AuthorLoaderActionTypes, AuthorLoaderActions } from "../actions/author-loader.actions";

export interface AuthorState extends EntityState<Author> {     
    data: Data,
    requestLoader: boolean
}

export const adapter = createEntityAdapter<Author>();

export const initialAuthorState = adapter.getInitialState({
    data: {} as Data,
    requestLoader: false
})

export function authorReducer(
    state = initialAuthorState,
    action: AuthorActions | AuthorLoaderActions
): AuthorState {
    switch(action.type) {

        case AuthorActionTypes.LoadedAuthors:
            return adapter.setAll(action.payload.data.dados?.pagina || [], {...state, data: action.payload.data.dados?.dados || ({} as Data) })

        case AuthorLoaderActionTypes.RequestLoaderAuthor:
            return {...state, requestLoader: true}

        case AuthorLoaderActionTypes.RequestFinishLoaderAuthor:
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