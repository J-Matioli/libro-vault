import { Action } from "@ngrx/store";
import { Work } from "src/app/core/models/work";

export enum BookActionTypes {
    AddBook = '[APP Book Dialog Component] Add Book',
    AddBookSuccess = '[APP Book Effects] Add Book Success',
    AddBookError = '[APP Work Service] Add Book Error',
}

export class AddBook implements Action {
    readonly type = BookActionTypes.AddBook;

    constructor(public payload: { data: Work }) {}
}

export class AddBookSuccess implements Action {
    readonly type = BookActionTypes.AddBookSuccess;
    constructor(public payload: Work) {}
}

export class AddBookError implements Action {
    readonly type = BookActionTypes.AddBookError;
}

export type BookActions =
    AddBook
    | AddBookSuccess
    | AddBookError
