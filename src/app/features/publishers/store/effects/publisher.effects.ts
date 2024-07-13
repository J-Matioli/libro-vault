import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, mergeMap } from "rxjs";
import { PublisherService } from "src/app/core/services/publisher.service";
import { AddPublisherSuccess, DeletePublisherSuccess, LoadedPublishers, PublisherActionTypes, RequestPublishers, UpdatePublisherSuccess } from "../actions/publisher.actions";

@Injectable()
export class PublisherEffects{
    constructor(
        private actions$: Actions,
        private publisherService: PublisherService
    ) {}

    loadPublishers = createEffect(
        () => this.actions$
            .pipe(
                ofType(PublisherActionTypes.RequestPublishers),
                mergeMap(({payload}) => {
                    const { data } = payload
                    return this.publisherService.getPublisher(this.parseParams(data))
                }),
                map(data =>  new LoadedPublishers({data}))
            )            
    )

    addPublisher = createEffect(
        () => this.actions$
            .pipe(
                ofType(PublisherActionTypes.AddPublisher),
                concatMap((action: any) => this.publisherService.postPublisher(action.payload.data)
                .pipe(
                    map((_) => new AddPublisherSuccess())
                ))
            ),        
    );

    addPublisherSucces = createEffect(
        () => this.actions$
            .pipe(
                ofType(PublisherActionTypes.AddPublisherSuccess),
                map((_) => new RequestPublishers({data: {
                    Ordenar: 'Novos',
                }})
            ),        
    ));

    updatePublisher = createEffect(
        () => this.actions$
            .pipe(
                ofType(PublisherActionTypes.UpdatePublisher),
                concatMap((action: any) => this.publisherService.updatePublisher(action.payload.data)
                .pipe(
                    map((_) => new UpdatePublisherSuccess())
                ))
            ),        
    );

    updatePublisherSucces = createEffect(
        () => this.actions$
            .pipe(
                ofType(PublisherActionTypes.UpdatePublisherSuccess),
                map((_) => new RequestPublishers({data: {
                    Ordenar: 'Novos',
                }})
            ),        
    ));

    deletePublisher = createEffect(
        () => this.actions$
            .pipe(
                ofType(PublisherActionTypes.DeletePublisher),
                concatMap((action: any) => this.publisherService.deletePublisher(action.payload.id)
                .pipe(
                    map((_) => new DeletePublisherSuccess())
                ))
            ),        
    );

    deletePublisherSucces = createEffect(
        () => this.actions$
            .pipe(
                ofType(PublisherActionTypes.DeletePublisherSuccess),
                map((_) => new RequestPublishers({data: {
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