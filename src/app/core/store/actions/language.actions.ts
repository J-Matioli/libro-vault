import { Action } from "@ngrx/store";
import { Language, LanguageResponse } from "../../models/language";
import { Data } from "../../models/data";

export enum LanguageActionTypes {
    RequestLanguages = '[APP Custom Form] Request Language',
    LoadedLanguages = '[APP Language Effects] Language Loaded',
    RequestLoaderLanguage = '[APP Language Service] Request Languages Loader',
    RequestFinishLoaderLanguage = '[APP Language Service] Request Finish Languages Loader',
}

export class RequestLanguages implements Action {
    readonly type = LanguageActionTypes.RequestLanguages;
    constructor(public payload: { data: Filter }) {}
}

export class LoadedLanguages implements Action {
    readonly type = LanguageActionTypes.LoadedLanguages;

    constructor(public payload: { data: LanguageResponse<{dados: Data, pagina: Language[]} | null> }) {}
}

export class RequestLoaderLanguage implements Action {
    readonly type = LanguageActionTypes.RequestLoaderLanguage
    constructor() {}
}

export class RequestFinishLoaderLanguage implements Action {
    readonly type = LanguageActionTypes.RequestFinishLoaderLanguage
    constructor() {}
}

export interface Filter {
    PalavraChave?: string
    Ordenar?: Sort
    NumeroPagina?: number
    ResultadosExibidos?: number
}

export type Sort = 'Crescente' | 'Decrescente' | 'Novos' | 'Antigos'

export type LanguageActions =
    RequestLanguages
    | LoadedLanguages

export type LanguageLoaderActions =
    | RequestLoaderLanguage
    | RequestFinishLoaderLanguage