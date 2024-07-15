import { Action } from "@ngrx/store";
import { Data } from "src/app/core/models/data";
import { Publisher, PublisherResponse } from "src/app/core/models/publisher";

export enum PublisherActionTypes {
    RequestPublishers = '[APP Publisher Component] Request All Publishers',
    LoadedPublishers = '[APP Publisher Effects] All Publishers Loaded',

    AddPublisher = '[APP Publisher Dialog Component] Add Publisher',
    AddPublisherSuccess = '[APP Publisher Effects] Add Publisher Success',
    AddPublisherError = '[APP Publisher Service] Add Publisher Error',

    UpdatePublisher = '[APP Publisher Dialog Component] Update Publisher',
    UpdatePublisherSuccess = '[APP Publisher Effects] Update Publisher Success',
    UpdatePublisherError = '[APP Publisher Service] Update Publisher Error',

    DeletePublisher = '[APP Publisher Dialog Component] Delete Publisher',
    DeletePublisherSuccess = '[APP Publisher Effects] Delete Publisher Success',
    DeletePublisherError = '[APP Publisher Service] Delete Publisher Success'
}

export class RequestPublishers implements Action {
    readonly type = PublisherActionTypes.RequestPublishers;
    constructor(public payload: { data: Filter }) {}
}

export class LoadedPublishers implements Action {
    readonly type = PublisherActionTypes.LoadedPublishers;

    constructor(public payload: { data: PublisherResponse<{dados: Data, pagina: Publisher[]} | null> }) {}
}

export class AddPublisher implements Action {
    readonly type = PublisherActionTypes.AddPublisher;

    constructor(public payload: { data: Publisher }) {}
}

export class AddPublisherSuccess implements Action {
    readonly type = PublisherActionTypes.AddPublisherSuccess;
}

export class AddPublisherError implements Action {
    readonly type = PublisherActionTypes.AddPublisherError;
}

export class UpdatePublisher implements Action {
    readonly type = PublisherActionTypes.UpdatePublisher;

    constructor(public payload: { data: Publisher }) {}
}

export class UpdatePublisherSuccess implements Action {
    readonly type = PublisherActionTypes.UpdatePublisherSuccess;
}

export class UpdatePublisherError implements Action {
    readonly type = PublisherActionTypes.UpdatePublisherError;
}

export class DeletePublisher implements Action {
    readonly type = PublisherActionTypes.DeletePublisher;

    constructor(public payload: {id: string}) {}
}

export class DeletePublisherSuccess implements Action {
    readonly type = PublisherActionTypes.DeletePublisherSuccess;
}

export class DeletePublisherError implements Action {
    readonly type = PublisherActionTypes.DeletePublisherError;
}

export interface Filter {
    PalavraChave?: string
    Ordenar?: Sort
    NumeroPagina?: number
    ResultadosExibidos?: number
}

export type Sort = 'Crescente' | 'Decrescente' | 'Novos' | 'Antigos'

export type PublisherActions =
    RequestPublishers
    | LoadedPublishers
    | AddPublisher
    | AddPublisherSuccess
    | AddPublisherError
    | UpdatePublisher
    | UpdatePublisherSuccess
    | DeletePublisher
    | DeletePublisherSuccess
    | DeletePublisherError
