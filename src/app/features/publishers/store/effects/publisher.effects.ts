import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { PublisherService } from "src/app/core/services/publisher.service";
import { LoadedPublishers, PublisherActionTypes } from "../actions/publisher.actions";

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
                mergeMap(_ => this.publisherService.getPublisher()),
                map(data =>  new LoadedPublishers({data}))
            )            
    )
}