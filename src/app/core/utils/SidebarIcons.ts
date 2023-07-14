import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable()
export class SvgIcons{

    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer){ }

    private icons: string[] = [
        'collections_bookmark',
        'comic_bubble',
        'home',
        'list',
        'manga',
        'menu_book',
        'person',
        'store'        
    ];

    registryIcons(){
        const PATH: string = './assets/icons/';
        this.icons.forEach(icon => this.iconRegistry.addSvgIcon(icon, this.sanitizer.bypassSecurityTrustResourceUrl(`${PATH}${icon}.svg`)));
    }

}