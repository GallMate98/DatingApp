import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl,FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {
@Input() label!:string;
@Input() maxDate!:Date;
@Input("formControl") formControl!:AbstractControl; 

bsConfig: Partial<BsDatepickerConfig>={
   containerClass:'theme-red',
   dateInputFormat: 'DD MMMM YYYY'

};

  constructor() { }

  ngOnInit(): void {
  }

  get control(){
    return this.formControl as FormControl;
  }

}
