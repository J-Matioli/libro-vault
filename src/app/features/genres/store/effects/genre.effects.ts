import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, mergeMap } from "rxjs";
import { GenreService } from "src/app/core/services/genre.service";
import { AddGenreSuccess, DeleteGenreSuccess, LoadedGenres, GenreActionTypes, RequestGenres, UpdateGenreSuccess } from "../actions/genre.actions";

@Injectable()
export class GenreEffects{
    constructor(
        private actions$: Actions,
        private GenreService: GenreService
    ) {}

    loadGenres = createEffect(
        () => this.actions$
            .pipe(
                ofType(GenreActionTypes.RequestGenres),
                mergeMap(({payload}) => {
                    const { data } = payload
                    return this.GenreService.getGenre(this.parseParams(data))
                }),
                map(data =>  new LoadedGenres({data}))
            )            
    )

    addGenre = createEffect(
        () => this.actions$
            .pipe(
                ofType(GenreActionTypes.AddGenre),
                concatMap((action: any) => this.GenreService.postGenre(action.payload.data)
                .pipe(
                    map((_) => new AddGenreSuccess())
                ))
            ),        
    );

    addGenreSuccess = createEffect(
        () => this.actions$
            .pipe(
                ofType(GenreActionTypes.AddGenreSuccess),
                map((_) => new RequestGenres({data: {
                    Ordenar: 'Novos',
                }})
            ),        
    ));

    updateGenre = createEffect(
        () => this.actions$
            .pipe(
                ofType(GenreActionTypes.UpdateGenre),
                concatMap((action: any) => this.GenreService.updateGenre(action.payload.data)
                .pipe(
                    map((_) => new UpdateGenreSuccess())
                ))
            ),        
    );

    updateGenreSuccess = createEffect(
        () => this.actions$
            .pipe(
                ofType(GenreActionTypes.UpdateGenreSuccess),
                map((_) => new RequestGenres({data: {
                    Ordenar: 'Novos',
                }})
            ),        
    ));

    deleteGenre = createEffect(
        () => this.actions$
            .pipe(
                ofType(GenreActionTypes.DeleteGenre),
                concatMap((action: any) => this.GenreService.deleteGenre(action.payload.id)
                .pipe(
                    map((_) => new DeleteGenreSuccess())
                ))
            ),        
    );

    deleteGenreSuccess = createEffect(
        () => this.actions$
            .pipe(
                ofType(GenreActionTypes.DeleteGenreSuccess),
                map((_) => new RequestGenres({data: {
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