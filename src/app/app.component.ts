import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() navSelect
  selectnav: any = 'recipe';
  
  ngOnInit() {   
  }
  navbarSelect(event){
    this.selectnav = event
  }
}
