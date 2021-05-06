import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking partner"
  account=""
  accno="accno pls";
  pswd="";
  AccountDetails:any={
      1000: { acno: 1000, pswrd: "user1", balnce: 5000,uname:"user1" },
      1001: { acno: 1001, pswrd: "user2", balnce: 3000,uname:"user2" },
      1002: { acno: 1002, pswrd: "user3", balnce: 10000,uname:"user3" },
  
  }
  constructor(private router:Router) { }
  

  ngOnInit(): void {
  }
  changeAcc(event:any){
    this.accno=event.target.value
    console.log(this.accno);
    

  }
  changePswd(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    

  }
  login(){
    
    var accno=this.accno;
    var pswd=this.pswd;
    let dataset=this.AccountDetails;
    if (accno in dataset){
      if (pswd==dataset[accno]["pswrd"]){
        alert("login successful")
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("invalid password")
      }
    }
    else{
      alert("invalid account number")
    }

  }



}
