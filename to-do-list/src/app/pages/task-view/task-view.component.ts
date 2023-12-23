import { TaskService } from './../../task.service';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})

export class TaskViewComponent {

  constructor(private router:Router) {}

  ngOnInit() {

  }
  onNewListClick() {
    this.router.navigate(['/new-list']);
  }

}
