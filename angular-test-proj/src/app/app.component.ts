import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test-proj';
  changeDate = new Date();
  groups = [
    {
      number: 301,
      faculty: `факультет комп'ютерних наук`,
      specialty: `комп'ютерні науки`,
    },
    {
      number: 308,
      faculty: `факультет комп'ютерних наук`,
      specialty: `інженерія програмного забезпечення`,
    },
  ];

  onDataChange(event) {
    this.changeDate = event;
  }
}
