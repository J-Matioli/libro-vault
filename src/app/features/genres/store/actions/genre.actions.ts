import { Action } from "@ngrx/store";
import { Data } from "src/app/core/models/data";
import { Genre, GenreResponse } from "src/app/core/models/genre";

export enum GenreActionTypes {
    RequestGenres = '[APP Genre Component] Request All Genres',
    LoadedGenres = '[APP Genre Effects] All Genres Loaded',

    AddGenre = '[APP Genre Dialog Component] Add Genre',
    AddGenreSuccess = '[APP Genre Effects] Add Genre Success',
    AddGenreError = '[APP Genre Service] Add Genre Error',

    UpdateGenre = '[APP Genre Dialog Component] Update Genre',
    UpdateGenreSuccess = '[APP Genre Effects] Update Genre Success',
    UpdateGenreError = '[APP Genre Service] Update Genre Error',

    DeleteGenre = '[APP Genre Dialog Component] Delete Genre',
    DeleteGenreSuccess = '[APP Genre Effects] Delete Genre Success',
    DeleteGenreError = '[APP Genre Service] Delete Genre Success'
}

export class RequestGenres implements Action {
    readonly type = GenreActionTypes.RequestGenres;
    constructor(public payload: { data: Filter }) {}
}

export class LoadedGenres implements Action {
    readonly type = GenreActionTypes.LoadedGenres;

    constructor(public payload: { data: GenreResponse<{dados: Data, pagina: Genre[]} | null> }) {}
}

export class AddGenre implements Action {
    readonly type = GenreActionTypes.AddGenre;

    constructor(public payload: { data: Genre }) {}
}

export class AddGenreSuccess implements Action {
    readonly type = GenreActionTypes.AddGenreSuccess;
}

export class AddGenreError implements Action {
    readonly type = GenreActionTypes.AddGenreError;
}

export class UpdateGenre implements Action {
    readonly type = GenreActionTypes.UpdateGenre;

    constructor(public payload: { data: Genre }) {}
}

export class UpdateGenreSuccess implements Action {
    readonly type = GenreActionTypes.UpdateGenreSuccess;
}

export class UpdateGenreError implements Action {
    readonly type = GenreActionTypes.UpdateGenreError;
}

export class DeleteGenre implements Action {
    readonly type = GenreActionTypes.DeleteGenre;

    constructor(public payload: {id: string}) {}
}

export class DeleteGenreSuccess implements Action {
    readonly type = GenreActionTypes.DeleteGenreSuccess;
}

export class DeleteGenreError implements Action {
    readonly type = GenreActionTypes.DeleteGenreError;
}

export interface Filter {
    PalavraChave?: string
    Ordenar?: Sort
    NumeroPagina?: number
    ResultadosExibidos?: number
}

export type Sort = 'Crescente' | 'Decrescente' | 'Novos' | 'Antigos'

export type GenreActions =
    RequestGenres
    | LoadedGenres
    | AddGenre
    | AddGenreSuccess
    | AddGenreError
    | UpdateGenre
    | UpdateGenreSuccess
    | DeleteGenre
    | DeleteGenreSuccess
    | DeleteGenreError
