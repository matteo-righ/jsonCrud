import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  postFormData(postData: any) {
    console.warn(postData);
  }
  
  constructor() { }


  ngOnInit(): void {}

}
