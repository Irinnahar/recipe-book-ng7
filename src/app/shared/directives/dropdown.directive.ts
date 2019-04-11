import { Directive, HostListener, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs:'appDropdown'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor() { }
  @HostListener('click') onToggle(){
    this.isOpen = !this.isOpen
  }
}
