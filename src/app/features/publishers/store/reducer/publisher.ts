import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Publisher } from "src/app/core/models/publisher";
import { PublisherActionTypes, PublisherActions } from "../actions/publisher.actions";

export interface PublisherState extends EntityState<Publisher> {     
    data: any
}

export const adapter = createEntityAdapter<Publisher>();

export const initialPublisherState = adapter.getInitialState({
    data: {}
})

export function publisherReducer(
    state = initialPublisherState,
    action: PublisherActions
): PublisherState {
    switch(action.type) {

        case PublisherActionTypes.LoadedPublishers:
            return adapter.addMany(action.payload.data.dados?.pagina || [], {...state, data: action.payload.data.dados?.dados})
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