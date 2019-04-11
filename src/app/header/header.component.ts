import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navSelect = new EventEmitter()
  onSelectNav(value){
    // console.log(value)
    this.navSelect.emit(value)
  }
}
