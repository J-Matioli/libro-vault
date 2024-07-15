import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, mergeMap } from "rxjs";
import { AuthorService } from "src/app/core/services/author.service";
import { AddAuthorSuccess, DeleteAuthorSuccess, LoadedAuthors, AuthorActionTypes, RequestAuthors, UpdateAuthorSuccess } from "../actions/author.actions";

@Injectable()
export class AuthorEffects{
    constructor(
        private actions$: Actions,
        private authorService: AuthorService
    ) {}

    loadAuthors = createEffect(
        () => this.actions$
            .pipe(
                ofType(AuthorActionTypes.RequestAuthors),
                mergeMap(({payload}) => {
                    const { data } = payload
                    return this.authorService.getAuthor(this.parseParams(data))
                }),
                map(data =>  new LoadedAuthors({data}))
            )            
    )

    addAuthor = createEffect(
        () => this.actions$
            .pipe(
                ofType(AuthorActionTypes.AddAuthor),
                concatMap((action: any) => this.authorService.postAuthor(action.payload.data)
                .pipe(
                    map((_) => new AddAuthorSuccess())
                ))
            ),        
    );

    addAuthorSuccess = createEffect(
        () => this.actions$
            .pipe(
                ofType(AuthorActionTypes.AddAuthorSuccess),
                map((_) => new RequestAuthors({data: {
                    Ordenar: 'Novos',
                }})
            ),        
    ));

    updateAuthor = createEffect(
        () => this.actions$
            .pipe(
                ofType(AuthorActionTypes.UpdateAuthor),
                concatMap((action: any) => this.authorService.updateAuthor(action.payload.data)
                .pipe(
                    map((_) => new UpdateAuthorSuccess())
                ))
            ),        
    );

    updateAuthorSuccess = createEffect(
        () => this.actions$
            .pipe(
                ofType(AuthorActionTypes.UpdateAuthorSuccess),
                map((_) => new RequestAuthors({data: {
                    Ordenar: 'Novos',
                }})
            ),        
    ));

    deleteAuthor = createEffect(
        () => this.actions$
            .pipe(
                ofType(AuthorActionTypes.DeleteAuthor),
                concatMap((action: any) => this.authorService.deleteAuthor(action.payload.id)
                .pipe(
                    map((_) => new DeleteAuthorSuccess())
                ))
            ),        
    );

    deleteAuthorSuccess = createEffect(
        () => this.actions$
            .pipe(
                ofType(AuthorActionTypes.DeleteAuthorSuccess),
                map((_) => new RequestAuthors({data: {
                    Ordenar: 'Novos',
                }})
            ),        
    ));

    parseParams(obj: any): string {
        return Object.entries(obj)
            .map(entry => entry.join('='))
            .join('&')        
    }
}