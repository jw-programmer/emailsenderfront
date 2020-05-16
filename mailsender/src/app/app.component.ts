import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  emailForm: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.emailForm = this.formBuilder.group({
      recipient:["",[Validators.required, Validators.email]],
      sender:["",[Validators.required]],
      subject:["",[Validators.required]],
      message:["",[Validators.required]]
    })
  }

  sendEmail(){
    console.log(this.emailForm.controls.message)
  }
}
