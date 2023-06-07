import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseauthService } from '../firebaseauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router,private auth:FirebaseauthService) { }
username;
  ngOnInit() {
this.username=sessionStorage.getItem('Username')
  }

  login(){
  this.auth.logout();
  }
}
