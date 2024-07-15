import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPublishers from '../reducer/publisher';


export const selectPublishersState = 
      createFeatureSelector<fromPublishers.PublisherState>("publisher");

export const selectPublishers = createSelector(
    selectPublishersState,
    fromPublishers.selectAll
)

export const selectPublishersData = createSelector(
    selectPublishersState,
    state => state.data
)

export const selectPublishersLoader = createSelector(
    selectPublishersState,
    state => state.requestLoader
)