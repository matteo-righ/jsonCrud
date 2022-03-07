import { Component } from '@angular/core';
import { JsonPLaceholderService } from './service/json-placeholder.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  url = 'https://jsonplaceholder.typicode.com/posts'
  dataToPost: any;

  constructor(private JsonPlaceholder: JsonPLaceholderService, private http: HttpClient, private dialog: MatDialog){
  }

  
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }) ;  
  }
  
  title = 'jsonCrud';
}
