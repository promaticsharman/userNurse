import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { WebServiceService } from 'src/shared/web-service.service';
@Component({
  selector: 'app-db-sidebar',
  templateUrl: './db-sidebar.component.html',
  styleUrls: ['./db-sidebar.component.scss']
})
export class DbSidebarComponent implements OnInit {
  userData = <any>{}
  fileToUpload1
  fileToUpload
  image_path
  purchasedExam = []
  constructor(private service: WebServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.image_path = environment.image_path + 'profile_image/'
    this.userData = JSON.parse(localStorage['userData']);
    console.log(this.userData.profile_image)
    this.getUserDetails()
    this.getPurchasedExam()
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['../login'], { relativeTo: this.route });
  }

  getUserDetails() {
    var obj = {
      id: this.userData._id
    }
    this.service.getUserDetails(obj).subscribe(data => {
      console.log(data)
      if (data.code == 200) {
        this.userData = data.data
      }
    }, err => {
      console.log(err)
    })

  }

  uploadImage(image) {
    console.log("=====img", image)
    var formdata: FormData = new FormData();
    formdata.append('profile_image', image),
      formdata.append('id', this.userData._id)
    this.service.updateUserProfile(formdata).subscribe(data => {
      console.log(data)
      if (data.code == 200) {
        var data = this.userData
        data.profile_image = data.image
        var obj = JSON.stringify(data)
        localStorage.setItem('userData', obj)
        this.ngOnInit()
      }
    }, err => {
      console.log(err)
    })

  }

  editFileInput(evt: any) {
    // this.fileToUpload = ''
    if (!evt.target) {
      return;
    }
    if (!evt.target.files) {
      return;
    }
    if (evt.target.files.length !== 1) {
      return;
    }
    const file = evt.target.files[0];
    // if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
    //   // this.toastr.warning('Please upload image file')
    //   return;
    // }
    console.log(evt.target.files[0])
    this.fileToUpload1 = evt.target.files[0];
    this.uploadImage(this.fileToUpload1)
    const fr = new FileReader();
    fr.onloadend = (loadEvent) => {
      let mainImage = fr.result;
      this.fileToUpload = mainImage;
    };
    fr.readAsDataURL(file);
  }

  getPurchasedExam(){
    var obj = {
      user_id : this.userData._id
    }
    console.log("Get Purchased Exam Obj: ",obj);
    this.service.getPurchasedExam(obj).subscribe(data => {
      console.log("Data : ", data);
      this.purchasedExam = data.data
    })
  }
}
