import { Component } from '@angular/core';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';

@Component({
  selector: 'my-app',
  templateUrl: './app/main.html',
})
export class AppComponent  {
  name = 'Angular';

  notifyHandle(changedCharacter: String) {
    if (changedCharacter) {
      console.log(`Event Emitter said you selected ${changedCharacter}`);
    }
  }
}

