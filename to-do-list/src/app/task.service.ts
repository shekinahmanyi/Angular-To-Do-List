import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private WebRequestService:WebRequestService) { }

  createList(title:string) {
    
    //we want to send a web request to create a new list 
    this.WebRequestService.post('lists',{title})

   }
}