import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:any = {}
  user: any ='';

  constructor(public accountService:AccountService, private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.setThisUser();
  }
  
  login() {
    this.accountService.login(this.model).subscribe(  response =>{
      this.router.navigateByUrl('/members');
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
  setThisUser() {
    this.accountService.currentUser$.subscribe((user:any) =>
      this.user=user,
      (error:any)=>{console.log("It was an error")});
  }
}

