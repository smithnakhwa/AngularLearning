import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
msg;
  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit() {
  }
  login(user,pass){
   let result=this.authService.checkuser(user,pass);
   if(result){
    this.route.navigate(['/product']);
   }
   else{
 this.msg='Enter Valid Username And Password';
   }
  }

}
