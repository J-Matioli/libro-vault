import { Action } from "@ngrx/store";
import { Data } from "src/app/core/models/data";
import { Author, AuthorResponse } from "src/app/core/models/author";

export enum AuthorActionTypes {
    RequestAuthors = '[APP Author Component] Request All Authors',
    LoadedAuthors = '[APP Author Effects] All Authors Loaded',

    AddAuthor = '[APP Author Dialog Component] Add Author',
    AddAuthorSuccess = '[APP Author Effects] Add Author Success',
    AddAuthorError = '[APP Author Service] Add Author Error',

    UpdateAuthor = '[APP Author Dialog Component] Update Author',
    UpdateAuthorSuccess = '[APP Author Effects] Update Author Success',
    UpdateAuthorError = '[APP Author Service] Update Author Error',

    DeleteAuthor = '[APP Author Dialog Component] Delete Author',
    DeleteAuthorSuccess = '[APP Author Effects] Delete Author Success',
    DeleteAuthorError = '[APP Author Service] Delete Author Success'
}

export class RequestAuthors implements Action {
    readonly type = AuthorActionTypes.RequestAuthors;
    constructor(public payload: { data: Filter }) {}
}

export class LoadedAuthors implements Action {
    readonly type = AuthorActionTypes.LoadedAuthors;

    constructor(public payload: { data: AuthorResponse<{dados: Data, pagina: Author[]} | null> }) {}
}

export class AddAuthor implements Action {
    readonly type = AuthorActionTypes.AddAuthor;

    constructor(public payload: { data: Author }) {}
}

export class AddAuthorSuccess implements Action {
    readonly type = AuthorActionTypes.AddAuthorSuccess;
}

export class AddAuthorError implements Action {
    readonly type = AuthorActionTypes.AddAuthorError;
}

export class UpdateAuthor implements Action {
    readonly type = AuthorActionTypes.UpdateAuthor;

    constructor(public payload: { data: Author }) {}
}

export class UpdateAuthorSuccess implements Action {
    readonly type = AuthorActionTypes.UpdateAuthorSuccess;
}

export class UpdateAuthorError implements Action {
    readonly type = AuthorActionTypes.UpdateAuthorError;
}

export class DeleteAuthor implements Action {
    readonly type = AuthorActionTypes.DeleteAuthor;

    constructor(public payload: {id: string}) {}
}

export class DeleteAuthorSuccess implements Action {
    readonly type = AuthorActionTypes.DeleteAuthorSuccess;
}

export class DeleteAuthorError implements Action {
    readonly type = AuthorActionTypes.DeleteAuthorError;
}

export interface Filter {
    PalavraChave?: string
    Ordenar?: Sort
    NumeroPagina?: number
    ResultadosExibidos?: number
}

export type Sort = 'Crescente' | 'Decrescente' | 'Novos' | 'Antigos'

export type AuthorActions =
    RequestAuthors
    | LoadedAuthors
    | AddAuthor
    | AddAuthorSuccess
    | AddAuthorError
    | UpdateAuthor
    | UpdateAuthorSuccess
    | DeleteAuthor
    | DeleteAuthorSuccess
    | DeleteAuthorError
