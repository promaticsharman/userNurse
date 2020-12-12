import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from 'src/shared/web-service.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
declare var $;

@Component({
  selector: 'app-db-profile',
  templateUrl: './db-profile.component.html',
  styleUrls: ['./db-profile.component.scss']
})
export class DbProfileComponent implements OnInit {
  edit
  dbProfile: FormGroup;
  emailForm: FormGroup;
  submitted = false;
  pass_submitted = false;
  userData
  userDetails
  old_password
  new_password
  incorrectPassword
  email
  emailsubmit
  emailExist

  constructor(private formBuilder: FormBuilder,
    private service: WebServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage['userData']);
    var emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    var phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
    this.edit = false
    this.incorrectPassword = false
    this.emailsubmit = false
    this.emailExist = false

    this.dbProfile = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      emailID: ['', [Validators.required, Validators.email]]
    })

    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })

    this.getProfile()
  }

  get dbProfileControl() {
    return this.dbProfile.controls;
  }

  get emailFormControl() {
    return this.emailForm.controls;
  }

  getProfile() {
    var obj = {
      id: this.userData._id
    }
    this.service.getUserDetails(obj).subscribe(data => {
      console.log(data);
      if (data.code == 200) {
        this.userDetails = data.data

        this.dbProfile.controls['firstName'].setValue(data.data.first_name)
        this.dbProfile.controls['lastName'].setValue(data.data.last_name)
        this.dbProfile.controls['address'].setValue(data.data.address)
        this.dbProfile.controls['mobileNo'].setValue(data.data.mobile_number)
        this.dbProfile.controls['emailID'].setValue(data.data.email)
      }
    })
  }
  editDetails() {
    console.log("=====workingggggg")
    this.edit = true
  }

  onSubmit() {
    console.log("pppp", this.dbProfile.valid, "valueeee", this.dbProfile.value)
    this.submitted = true;
    if (this.dbProfile.valid) {
      var obj = {
        id: this.userData._id,
        first_name: this.dbProfile.value.firstName,
        last_name: this.dbProfile.value.lastName,
        mobile_number: this.dbProfile.value.mobileNo,
        address: this.dbProfile.value.address
      }
      console.log(this.dbProfile.value);
      this.service.editUser(obj).subscribe(data => {
        console.log(data);
        this.submitted = false;
        this.ngOnInit()
      }, err => {
        console.log("--error", err)
      })
    }
  }

  showModel() {
    console.log("====doneee=")
    $('#passwordModal').modal('show')
  }

  showEmailModel() {
    console.log("====doneee=")
    $('#emailModal').modal('show')
  }

  changePassword() {
    this.pass_submitted = true
    var obj = {
      id: this.userData._id,
      old_password: this.old_password,
      new_password: this.new_password
    }
    if (this.old_password && this.new_password) {
      this.service.changePassword(obj).subscribe(data => {
        console.log(data);
        if (data.code == 200) {
          this.incorrectPassword = false
          this.pass_submitted = false;
          $('#passwordModal').modal('hide')
          this.ngOnInit()
        } else {
          this.incorrectPassword = true
        }
      }, err => {
        console.log("--error", err)
      })
    }
  }

  changeEmail() {
    this.emailsubmit = true
    var obj = {
      id: this.userData._id,
      email: this.emailForm.value.email,
    }
    if (this.emailForm.valid) {
      this.service.changeEmail(obj).subscribe(data => {
        console.log(data);
        if (data.code == 200) {
          this.emailsubmit = false;
          $('#emailModal').modal('hide')
          this.ngOnInit()
        } else {
          this.emailExist = true
        }
      }, err => {
        console.log("--error", err)
      })
    }

  }
}
