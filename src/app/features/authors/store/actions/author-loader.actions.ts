import { Action } from "@ngrx/store";

export enum AuthorLoaderActionTypes {
    RequestLoaderAuthor = '[APP Author Service] Request Authors Loader',
    RequestFinishLoaderAuthor = '[APP Author Service] Request Finish Authors Loader',
}

export class RequestLoaderAuthor implements Action {
    readonly type = AuthorLoaderActionTypes.RequestLoaderAuthor
    constructor() {}
}

export class RequestFinishLoaderAuthor implements Action {
    readonly type = AuthorLoaderActionTypes.RequestFinishLoaderAuthor
    constructor() {}
}

export type AuthorLoaderActions =
    RequestLoaderAuthor
    | RequestFinishLoaderAuthor