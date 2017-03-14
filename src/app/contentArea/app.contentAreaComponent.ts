import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'contentArea',
  templateUrl: './app/contentArea/contentArea.html',
})
export class contentAreaComponent  {

  @Input() characters: String[] = ['First', 'Second', 'Last'];
  @Output() notify = new EventEmitter<String>();

  selectedCharacter: String = '';


  select(selectedCharacter: String) {
    console.log("You selected " + selectedCharacter);
    this.selectedCharacter = selectedCharacter;
    this.notify.emit(selectedCharacter);
  }

}
