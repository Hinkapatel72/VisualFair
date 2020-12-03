import { Directive, Output, HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[hammerTime]'
})
export class HammerTimeDirective {

  @Output() doubleTap = new EventEmitter();

  constructor() { }

  @HostListener('tap', ['$event'])
  onTap(e) {
    if (e.tapCount === 2) {
      this.doubleTap.emit(e);
    }
  }

}
