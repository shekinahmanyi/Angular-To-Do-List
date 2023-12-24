import { TaskService } from './../../task.service';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [HttpClientModule, RouterLinkActive,RouterLink,NgFor],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})

export class TaskViewComponent {

  lists:any;
  tasks:any;

  constructor(private router:Router, private taskService:TaskService, private route:ActivatedRoute ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        console.log(params);   

        this.taskService.getTasks(params['listId']).subscribe((tasks) => {
          this.tasks = tasks as any;
        });
      }
       
    );

    this.taskService.getLists().subscribe((lists:any) => {
      // Code block inside the subscription
      this.lists = lists;
    });
  }

  onNewListClick() {
    this.router.navigate(['/new-list']);
  }
  
  onListId(list: any) {
    this.router.navigate([`/lists/${list._id}`]);
  }
}
