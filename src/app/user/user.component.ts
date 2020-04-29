import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-pages',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // init_plugins();
  }

}
