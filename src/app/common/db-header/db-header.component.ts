import { Component, OnInit , Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { WebServiceService } from 'src/shared/web-service.service';
import { environment } from "../../../environments/environment.prod";
@Component({
  selector: 'app-db-header',
  templateUrl: './db-header.component.html',
  styleUrls: ['./db-header.component.scss']
})
export class DbHeaderComponent implements OnInit {
  userData=<any>{}
  image_path
  
  ngOnInit(): void {
    this.image_path = environment.image_path + 'profile_image/'
    this.userData=JSON.parse(localStorage['userData']);
    this.service.getAllExamName().subscribe(data => {
      console.log(data);
      this.examName = data.data
      console.log("Data Array : ", this.examName);
    })
    this.getUserDetails()
    this.getCartCount()
  }
  examName: [];
  isLogged = false
  cartCount = 0;
  constructor(private service: WebServiceService,
    private router: Router,
    private route: ActivatedRoute) {

    if(localStorage['userData']){
        this.isLogged = true;
    }

    //this.cartCount = 50;

  }

  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  getCartCount() {
    var user_id,session_id;
    if(localStorage['userData']){
        var user = JSON.parse(localStorage['userData']);
        user_id = user._id
    }
    if(localStorage['session']){
        // var user = JSON.parse(localStorage['userData']);
        session_id = localStorage['session']
    }else{
        session_id = this.makeid(10);
        localStorage['session'] = session_id;
    }

    

    var obj = {
      user_id : user_id,
      session_id : session_id,
    }
    this.service.getCartCount(obj).subscribe(data => {
      console.log(data)
      if (data.code == 200 || data.code == 201) {
         this.cartCount = data.count;
      }
    }, err => {
      console.log(err)

      this.service.commonError(err)
    })
  }

  addToCart(count) {
    // alert(count);
    this.cartCount = count;

    // alert(this.cartCount)
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



  navigate(id){
    // this.router.navigate(['/exams/',id]) 
    this.router.navigate(['/exams/',id]);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
    };
  }

  navigatelms(id){
    // this.router.navigate(['/exams/',id]) 
    this.router.navigate(['/lms/',id, 'Free']);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
    };
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['../login'], { relativeTo: this.route });
  }
}
