import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `
})
export class AppComponent {
  title = 'myforms';

  favoriteColorControl = new FormControl('');
}
