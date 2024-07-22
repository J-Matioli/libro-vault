import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Work } from "src/app/core/models/work";

import { Data } from "src/app/core/models/data";
import { BookActions, BookActionTypes } from "../actions/book.actions";

export interface BookState extends EntityState<Work> {     
    data: Data,
    requestLoader: boolean
}

export const adapter = createEntityAdapter<Work>();

export const initialBookState = adapter.getInitialState({
    data: {} as Data,
    requestLoader: false
})

export function bookReducer(
    state = initialBookState,
    action: BookActions
): BookState {
    switch(action.type) {

        case BookActionTypes.AddBookSuccess:            
            return adapter.addOne(action.payload, {...state})       
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