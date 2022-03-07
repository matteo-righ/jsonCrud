import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonPLaceholderService } from '../service/json-placeholder.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  // postFormData(postData: any) {
  //   console.warn(postData);
  // }
  postForm !: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private postHolders: JsonPLaceholderService) { }


  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      userId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required]
    })
  }

  postData(){

    this.postHolders.postData(this.postForm.value).subscribe((result) => {
      console.log(result);
    })
    console.log(this.postForm.value)
  }

}
