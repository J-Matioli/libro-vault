import { Actions, createEffect, ofType } from "@ngrx/effects"
import { LanguageService } from "../../services/language.service"
import { LanguageActionTypes, LoadedLanguages } from "../actions/language.actions"
import { Injectable } from "@angular/core"
import { map, mergeMap } from "rxjs"

@Injectable()
export class LanguageEffects{
    constructor(
        private actions$: Actions,
        private languageService: LanguageService
    ) {}

    loadLanguages = createEffect(
        () => this.actions$
            .pipe(
                ofType(LanguageActionTypes.RequestLanguages),
                mergeMap(({payload}) => {
                    const { data } = payload
                    return this.languageService.getLanguage(this.parseParams(data))
                }),
                map(data =>  new LoadedLanguages({data}))
            )            
    )

    parseParams(obj: any): string {
        return Object.entries(obj)
            .map(entry => entry.join('='))
            .join('&')        
    }
}