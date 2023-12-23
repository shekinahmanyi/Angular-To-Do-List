import { TaskService } from './../../task.service';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})

export class TaskViewComponent {

  constructor(private TaskService: TaskService) {}

  ngOnInit() {

  }

  createNewList() {
    this.TaskService.createList('Testing New List').subscribe((response: any) => {
      console.log(response);
    });
 
  }

}
