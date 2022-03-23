import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl,FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm!:FormGroup;
  maxDate!:Date;
  validationErrors:string[]=[];

  constructor(private accountService:AccountService, private toastr: ToastrService,private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.inititializeForm();
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }

  inititializeForm(){
    this.registerForm=this.fb.group({
      gender:['male'],
      username: ['', Validators.required],
      knownAs:['', Validators.required],
      dateOfBirth:['', Validators.required],
      city:['', Validators.required],
      country:['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword:['',[ Validators.required, this.matchValues('password')]]
    })
  }

  matchValues(matchTo:string):ValidatorFn{
    return(control:AbstractControl| any) => {
      return control?.value === control?.parent?.controls[matchTo].value
      ? null:{isMatching:true};
    }
  }

  register() {
    this.accountService.register(this.registerForm.value).subscribe(response => {
      this.router.navigateByUrl('/member');
    }, (error: any) => {
       this.validationErrors = error; 
    })
  }

  
  cancel(){
    this.cancelRegister.emit(false);
  }

  get gender(){
    return this.registerForm.get('gender') as FormControl;
  }

  get userName(){
    return this.registerForm.get('username') as FormControl;
  }

  get knownAs(){
    return this.registerForm.get('knownAs') as FormControl;
  }

  get dateOfBirth(){
    return this.registerForm.get('dateOfBirth') as FormControl;
  }

  get city(){
    return this.registerForm.get('city') as FormControl;
  }

  get country(){
    return this.registerForm.get('country') as FormControl;
  }

  
  get password(){
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword') as FormControl;
  }



}
