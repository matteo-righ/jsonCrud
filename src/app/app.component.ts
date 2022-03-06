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

  data: Array<any>

  postData = {
    id: '',
    title: '',
    body: ''
  }

  url = 'https://jsonplaceholder.typicode.com/posts'
  dataToPost: any;

  constructor(private JsonPlaceholder: JsonPLaceholderService, private http: HttpClient, private dialog: MatDialog){
    this.data = new Array<any>();
    this.http.post(this.url, this.postData).toPromise().then((data) => {
      console.log(data)
    });
  }

  
  getDataFromAPI() {
    this.JsonPlaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data
    })
  }

  
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }) ;  
  }

  postFormData(postData: any) {
    console.warn(postData);
  }
  
  title = 'jsonCrud';
}
