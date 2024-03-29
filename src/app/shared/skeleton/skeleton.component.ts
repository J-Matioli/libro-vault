import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  host: {
    'class': 'pulse'
  },
  template: '',
  styles: [`
    :host {
      display: block;
      width: var(--skeleton-rect-width);
      height: var(--skeleton-rect-height);
      background: rgb(239, 241, 246) no-repeat;
    }
  `]
})
export class SkeletonComponent implements OnInit {

  width: string
  height: string
  className: string

  constructor(private host: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    const host = this.host.nativeElement;

    if(this.className) {
      this.className.split(',').forEach(className => host.classList.add(className))
    }

    host.style.setProperty('--skeleton-rect-width', this.width ?? '100%');
    host.style.setProperty('--skeleton-rect-height', this.height ?? '100%');
  }

}
