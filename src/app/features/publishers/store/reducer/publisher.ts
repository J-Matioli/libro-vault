import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Publisher } from "src/app/core/models/publisher";
import { PublisherActionTypes, PublisherActions } from "../actions/publisher.actions";
import { Data } from "src/app/core/models/data";

export interface PublisherState extends EntityState<Publisher> {     
    data: Data
}

export const adapter = createEntityAdapter<Publisher>();

export const initialPublisherState = adapter.getInitialState({
    data: {} as Data
})

export function publisherReducer(
    state = initialPublisherState,
    action: PublisherActions
): PublisherState {
    switch(action.type) {

        case PublisherActionTypes.LoadedPublishers:
            return adapter.setAll(action.payload.data.dados?.pagina || [], {...state, data: action.payload.data.dados?.dados || ({} as Data) })
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