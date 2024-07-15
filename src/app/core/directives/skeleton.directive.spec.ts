import { SkeletonDirective } from './skeleton.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe(SkeletonDirective.name, () => {
  
  let templateRef: TemplateRef<any>;
  let viewContainer: ViewContainerRef;
  
  it('should create an instance', () => {
    const directive = new SkeletonDirective(templateRef, viewContainer);
    expect(directive).toBeTruthy();
  });
});
