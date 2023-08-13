import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  form=new FormGroup({
    first_name: new FormControl('',[Validators.required,Validators.pattern("[a-zA-z]{3,50}")]),
    gender:new FormControl("",Validators.required),
    country:new FormControl("",Validators.required),
    city:new FormControl("",Validators.required),
    age:new FormControl("",[Validators.required,Validators.pattern("[0-9]{0,3}")])
  })
}
