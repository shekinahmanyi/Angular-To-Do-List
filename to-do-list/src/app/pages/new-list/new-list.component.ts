import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})


export class NewListComponent {
  constructor (private router:Router, private taskService:TaskService) {}
  
  ngOnInit() {

  }
  onCancelListClick() {
    this.router.navigate(['/']);
  }

  createList(title: string) {
    this.taskService.createList(title).subscribe((response: any) => {
      console.log(response);
    });
 
  }
  

}
