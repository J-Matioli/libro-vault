import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { map, mergeMap } from "rxjs";
import { LoadedUser, UserActionTypes } from "../actions/user.actions";

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
        ) { }

    loadAllProducts = createEffect(
        () => this.actions$
            .pipe(
                ofType(UserActionTypes.RequestUser),
                mergeMap(_ => this.authService.getUser()),
                map(data =>  new LoadedUser({data: data.dados.pagina[0]}))
            )            
    )
}