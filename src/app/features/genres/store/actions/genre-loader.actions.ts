import { Action } from "@ngrx/store";

export enum GenreLoaderActionTypes {
    RequestLoaderGenre = '[APP Genre Service] Request Genres Loader',
    RequestFinishLoaderGenre = '[APP Genre Service] Request Finish Genres Loader',
}

export class RequestLoaderGenre implements Action {
    readonly type = GenreLoaderActionTypes.RequestLoaderGenre
    constructor() {}
}

export class RequestFinishLoaderGenre implements Action {
    readonly type = GenreLoaderActionTypes.RequestFinishLoaderGenre
    constructor() {}
}

export type GenreLoaderActions =
    RequestLoaderGenre
    | RequestFinishLoaderGenre