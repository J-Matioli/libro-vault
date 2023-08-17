import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { SkeletonComponent } from 'src/app/shared/skeleton/skeleton.component';

@Directive({
  selector: '[appSkeleton]'
})
export class SkeletonDirective implements OnChanges {

  @Input('appSkeleton') isLoading = false;
  @Input('appSkeletonRepeat') size = 1;
  @Input('appSkeletonWidth') width: string;
  @Input('appSkeletonHeight') height: string;
  @Input('appSkeletonClassName') className: string;

  constructor(
    private tpl: TemplateRef<any>, 
    private vcr: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading']) {
      this.vcr.clear();

      if (changes['isLoading'].currentValue) {
         Array.from({ length: this.size }).forEach(() => {
           const ref = this.vcr.createComponent(SkeletonComponent);
           
           Object.assign(ref.instance, {
             width: this.width === 'rand' ? `${this.random(30, 90)}%` : this.width,
             height: this.height,
             className: this.className
           })
         })
      } else {
        this.vcr.createEmbeddedView(this.tpl);
      }
    }
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
