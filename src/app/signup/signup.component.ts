import { Component, OnInit } from '@angular/core';
import { environment } from "./../../environments/environment.prod"
import { ToastrService } from "ngx-toastr"
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from "./../../shared/web-service.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private toastr : ToastrService,private service : WebServiceService, private router: Router,private route: ActivatedRoute,) { }
  signup
  form
  values
  p_false = false
  loading=false
  emailStatus = false
  exams = []
  states = []
  ngOnInit(): void {     
    this.form = {};
    this.form.choose_exam="";
    this.form.checkbox=false;
    this.form.state="";
    this.signup = new FormGroup({
        first_name : new FormControl('',[
          Validators.required,
        ]),
        last_name : new FormControl('',[
          Validators.required,
        ]),
        email : new FormControl('',[
          Validators.required,
          Validators.email,
        ]),
        password : new FormControl('',[
          Validators.required,
        ]),
        confirm_password : new FormControl('',[
          Validators.required,
        ]),
        choose_exam : new FormControl('',[
          Validators.required,
        ]),
        mobile_number : new FormControl('',[
          Validators.required,
        ]),
        address : new FormControl('',[
          Validators.required,
        ]),
        state : new FormControl('',[
          Validators.required,
        ]),
        checkbox : new FormControl('',[
          Validators.required,
        ]),
        zip_code : new FormControl('',[
          Validators.required,
        ]),
    })
    this.getExamsAndStates();
  }

  onKey(event: any) {
    this.values = event.target.value;
    console.log(this.values)
    if (this.form.password === this.values) {
    this.p_false = false;
    } else {
    this.p_false = true;
    }
    }
  onKeyEmail(event: any) {
   // this.values = event.target.value;
    this.emailStatus = false;
    var formData=<any>{};
    formData.search_text=event.target.value;

    /* this.service.checkemail(formData).subscribe(data =>{
      console.log(data)
      if(data.code == 200 || data.code == 201){
       // this.loading=false;
         // this.toastr.success("Registration Successful!","Please activate your account from the activation link sent on your registered email address.");
          //this.router.navigate(['../login'], { relativeTo: this.route });
        }
    
    },err =>{
      console.log(err)

      this.service.commonError(err)
    }) */
  


    }

  getExamsAndStates(){
    this.service.getExamAndStates().subscribe(data =>{
			console.log(data)
			if(data.code == 200 || data.code == 201){
          this.exams = data.exams;
          this.states = data.states;
			}
		
		},err =>{
			console.log(err)

      this.service.commonError(err)
		})
  }

  register(){
    if(!this.form.checkbox){
      this.toastr.error("Please accept terms of use before registering");
    }else{
    this.loading=true;
    if(!this.p_false && !this.emailStatus){ // make sure password and confirm password match and email already not exist.
      var formData = {
        first_name : this.form.first_name,
        last_name : this.form.last_name,
        exam_id:this.form.choose_exam,
        email : this.form.email,
        password : this.form.password,
        address : this.form.address,
        state_id : this.form.state,
        zipcode : this.form.zip_code,
        mobile_number: this.form.mobile_number
      }
      
      this.service.register(formData).subscribe(data =>{
        console.log(data)
        if(data.code == 200 || data.code == 201){
          this.loading=false;
          localStorage['userData']=JSON.stringify(data.user);
          this.loading=false;
          this.toastr.success("Login Successful!","Welcome "+data?.user?.first_name);
          this.router.navigate(['../dbDashboard'], { relativeTo: this.route });
          }
      
      },err =>{
        if(err.msg="EMAIL_ALREADY_EXISTS"){
          this.toastr.error("Email address already registered");
          this.loading=false;
        }else{
        console.log(err)
        this.loading=false;
        this.service.commonError(err)
        }
      })
    }
  }
  }

  

}
