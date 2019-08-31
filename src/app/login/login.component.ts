import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username = ["usr1", "usr2", "usr3"];
  password = ["pass1", "pass2", "pass3"];

  givenUser:string = "";
  givenPass:string = "";

  constructor(private router:Router) {

  };

  login() {
    var user = this.username.indexOf(this.givenUser)
    if (user != -1){
      if (this.password.indexOf(this.givenPass) === user){
        this.router.navigateByUrl('/account');
      } else {
        console.log("badPass for " + this.username[user]);
        return "badPass";
      }
    } else {
      console.log("badUsr");
      return "badUsr";
    }
  };

  ngOnInit() { };

}
