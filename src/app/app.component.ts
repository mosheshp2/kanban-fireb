import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban-fireb';

  taskList = [
    { id: '1', name: 'avinoam', type: '3', date: '11/1/2022' },
    { id: '2', name: 'shushan', type: '4', date: '5/1/2022' },
    { id: '3', name: 'Adani', type: '4', date: '7/1/2022' },
  ];
}
  