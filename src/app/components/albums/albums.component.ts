import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JsonPLaceholderService } from 'src/app/service/json-placeholder.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  data: Array<any>

  constructor(private JsonPlaceholder: JsonPLaceholderService, private http: HttpClient, private dialog: MatDialog){
    this.data = new Array<any>();
 
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

  ngOnInit(): void {
  }

}
