import { Component, OnInit } from '@angular/core';
import { environment } from "./../../environments/environment.prod"
import { ToastrService } from "ngx-toastr"
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { WebServiceService } from "./../../shared/web-service.service";

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService, private service: WebServiceService, private router: Router, private route: ActivatedRoute) { }
  login
  email
  password
  loading = false
  session_id
  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  submit() {

    var formData = {
      email: this.login.email,
      password: this.login.password


    }
    console.log(formData);
    this.loading = true;
    this.service.login(formData).subscribe(data => {
      console.log(data)
      if (data.code == 200 || data.code == 201) {
        localStorage['userData'] = JSON.stringify(data.user);
        if (localStorage['session']) {
          // var user = JSON.parse(localStorage['userData']);
          this.session_id = localStorage['session']
          var obj = {
            user_id: data.user._id,
            session_id: this.session_id
          }
          this.service.replaceSessionWithUserId(obj).subscribe(data => {
            console.log("replace",data)
            if(data.code == 200){
              localStorage.removeItem('session')
            }
          }, err => {
            if (err.status == 404) {
              this.toastr.error("Incorrect Username or Password");
              this.loading = false;
            } else {
              console.log(err)
              this.loading = false;
              this.toastr.error("Incorrect Username or Password");
            }
          })
        }
        this.loading = false;
        this.toastr.success("Login Successful!", "Welcome " + data?.user?.first_name);
        this.router.navigate(['../dbDashboard'], { relativeTo: this.route });
      }

    }, err => {
      if (err.status == 404) {
        this.toastr.error("Incorrect Username or Password");
        this.loading = false;
      } else {
        console.log(err)
        this.loading = false;
        this.toastr.error("Incorrect Username or Password");
      }
    })
  }

}
