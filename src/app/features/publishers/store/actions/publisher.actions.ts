import { Update } from "@ngrx/entity";
import { Action } from "@ngrx/store";
import { Data } from "src/app/core/models/data";
import { Publisher, PublisherResponse } from "src/app/core/models/publisher";

export enum PublisherActionTypes {
    RequestPublishers = '[APP Publisher Component] Request All Publishers',
    LoadedPublishers = '[APP Publisher Effects] All Publishers Loaded',

    AddPublisher = '[APP Publisher Dialog Component] Add Publisher',
    AddPublisherSucces = '[APP Publisher Effects] Add Publisher Success',

    UpdatePublisher = '[APP Publisher Dialog Component] Update Publisher',
    UpdatePublisherSuccess = '[APP Publisher Effects] Update Publisher Success',

    DeletePublisher = '[APP Publisher Dialog Component] Delete Publisher',
    DeletePublisherSuccess = '[APP Publisher Effects] Delete Publisher Success'
}

export class RequestPublishers implements Action {
    readonly type = PublisherActionTypes.RequestPublishers;
    constructor(public payload: { filter: Filter }) {}
}

export class LoadedPublishers implements Action {
    readonly type = PublisherActionTypes.LoadedPublishers;

    constructor(public payload: { data: PublisherResponse<{dados: Data, pagina: Publisher[]} | null> }) {}
}

export class AddPublisher implements Action {
    readonly type = PublisherActionTypes.AddPublisher;

    constructor(public payload: { data: Publisher }) {}
}

export class AddPublisherSucces implements Action {
    readonly type = PublisherActionTypes.AddPublisherSucces;

    constructor(public payload: Publisher) {}
}

export class UpdatePublisher implements Action {
    readonly type = PublisherActionTypes.UpdatePublisher;

    constructor(public payload: { data: Publisher }) {}
}

export class UpdatePublisherSuccess implements Action {
    readonly type = PublisherActionTypes.UpdatePublisherSuccess;

    constructor(public payload: Update<Publisher>) {}
}

export class DeletePublisher implements Action {
    readonly type = PublisherActionTypes.DeletePublisher;

    constructor(public payload: {id: string}) {}
}

export class DeletePublisherSuccess implements Action {
    readonly type = PublisherActionTypes.DeletePublisherSuccess;

    constructor(public payload: {id: string}) {}
}

export interface Filter {
    PalavraChave?: string
    Ordenar?: 'Crescente' | 'Decrescente' | 'Novos' | 'Antigos'
    NumeroPagina?: number
    ResultadosExibidos?: number
}

export type PublisherActions =
    RequestPublishers
    | LoadedPublishers
    | AddPublisher
    | AddPublisherSucces
    | UpdatePublisher
    | UpdatePublisherSuccess
    | DeletePublisher
    | DeletePublisherSuccess
