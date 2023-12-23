import { Component } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})


export class NewListComponent {
  constructor (private taskService:TaskService) {}
  ngOnInit() {

  }
  createNewList() {
    this.taskService.createList('Testing New List').subscribe((response: any) => {
      console.log(response);
    });
 
  }

}
