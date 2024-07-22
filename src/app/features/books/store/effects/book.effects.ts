import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { BookService } from "src/app/core/services/book.service";
import { AddBookSuccess, BookActionTypes } from "../actions/book.actions";

@Injectable()
export class BookEffects{
    constructor(
        private actions$: Actions,
        private bookService: BookService
    ) {}

    addBook = createEffect(
        () => this.actions$
            .pipe(
                ofType(BookActionTypes.AddBook),
                concatMap((action: any) => this.bookService.postWork(action.payload.data)
                .pipe(
                    map((data: any) => new AddBookSuccess(data.dados))
                ))
            ),        
    );
}