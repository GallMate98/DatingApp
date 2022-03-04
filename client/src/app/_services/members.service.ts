import { HttpClient } from '@angular/common/http';
import { analyzeNgModules } from '@angular/compiler';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { ApplicationModule, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_modules/member';




@Injectable({
  providedIn: 'root'
})
export class MembersService {
baseUrl=environment.apiUrl;
  constructor (private http:HttpClient) { }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl+'users');
  }
  getMember(username:string){
    return this.http.get<Member>(this.baseUrl+'users/'+username);
  }
}
