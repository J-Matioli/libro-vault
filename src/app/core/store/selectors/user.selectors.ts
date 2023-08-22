import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../../models/user";


export const selectInitialValue = createFeatureSelector<any>('core');

export const selectUser = createSelector(
    selectInitialValue,
    (core) => core.user
)