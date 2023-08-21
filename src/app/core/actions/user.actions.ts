import { Action } from "@ngrx/store";
import { User } from "../models/user";

export enum UserActionTypes {
    RequestUser = '[APP My Account] Request User',
    LoadedUser = '[APP User Effects] User Loaded',

    UpdateUser = '[APP Dialog Component] Update User',
    UpdateUserSuccess = '[APP Product Effects] Update User Success',
}

export class RequestUser implements Action {
    readonly type = UserActionTypes.RequestUser;
}

export class LoadedUser implements Action {
    readonly type = UserActionTypes.LoadedUser;

    constructor(public payload: { data: User }) {}
}

export type UserActions =
    RequestUser
    | LoadedUser