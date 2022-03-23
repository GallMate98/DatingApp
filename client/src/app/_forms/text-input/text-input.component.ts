import { Component, Input, OnInit, Self } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
@Input("label") label:string | undefined;
@Input("type") type ='text';
@Input ("formControl") formControl!:AbstractControl;
  constructor() { }

  ngOnInit(): void {
  }

  get control(){
    return this.formControl as FormControl;
  }

}
