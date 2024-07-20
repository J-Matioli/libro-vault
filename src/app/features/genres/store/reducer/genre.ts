import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Genre } from "src/app/core/models/genre";
import { GenreActionTypes, GenreActions } from "../actions/genre.actions";
import { Data } from "src/app/core/models/data";
import { GenreLoaderActionTypes, GenreLoaderActions } from "../actions/genre-loader.actions";

export interface GenreState extends EntityState<Genre> {     
    data: Data,
    requestLoader: boolean
}

export const adapter = createEntityAdapter<Genre>();

export const initialGenreState = adapter.getInitialState({
    data: {} as Data,
    requestLoader: false
})

export function genreReducer(
    state = initialGenreState,
    action: GenreActions | GenreLoaderActions
): GenreState {
    switch(action.type) {

        case GenreActionTypes.LoadedGenres:
            return adapter.setAll(action.payload.data.dados?.pagina || [], {...state, data: action.payload.data.dados?.dados || ({} as Data) })

        case GenreLoaderActionTypes.RequestLoaderGenre:
            return {...state, requestLoader: true}

        case GenreLoaderActionTypes.RequestFinishLoaderGenre:
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