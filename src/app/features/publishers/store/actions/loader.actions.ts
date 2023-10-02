import { Action } from "@ngrx/store";

export enum PublisherLoaderActionTypes {
    RequestLoaderPublisher = '[APP Publisher Service] Request Publishers Loader',
    RequestFinishLoaderPublisher = '[APP Publisher Service] Request Finish Publishers Loader',
}

export class RequestLoaderPublisher implements Action {
    readonly type = PublisherLoaderActionTypes.RequestLoaderPublisher
    constructor(public payload: any) {}
}

export class RequestFinishLoaderPublisher implements Action {
    readonly type = PublisherLoaderActionTypes.RequestFinishLoaderPublisher
    constructor(public payload: any) {}
}

export type PublisherLoaderActions =
    RequestLoaderPublisher
    | RequestFinishLoaderPublisher