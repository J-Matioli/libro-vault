import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../services/auth.service";
import { map, mergeMap, of, withLatestFrom } from "rxjs";
import { LoadedUser, UserActionTypes } from "../actions/user.actions";
import { Store } from "@ngrx/store";
import { selectUser } from "../selectors/user.selectors";

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private authService: AuthService
        ) { }

    loadAllProducts = createEffect(
        () => this.actions$
            .pipe(
                ofType(UserActionTypes.RequestUser),
                withLatestFrom(
                    this.store.select(selectUser)
                ),
                mergeMap(([_, user]) => {    
                    console.log(user);
                                    
                    if(Object.keys(user).length === 0) {
                        return this.authService.getUser()
                            .pipe(map(res => res.dados.pagina[0]))
                    }
                    return of(user)
                }),
                map(data =>  new LoadedUser({data: data}))
            )            
    )
}