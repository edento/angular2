import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './app/header/header.html',
  styleUrls: ['./app/header/header.css'],

})
export class headerComponent  {

  @Input() name: String = 'Eden';

}
