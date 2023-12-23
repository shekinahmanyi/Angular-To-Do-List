import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  
import { TaskViewComponent } from './pages/task-view/task-view.component';

import { HttpClientModule, HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, TaskViewComponent,HttpClientModule], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})


export class AppComponent {
  title = 'to-do-list';
}
