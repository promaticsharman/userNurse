import { Component, OnInit , Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceService } from 'src/shared/web-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {

  examName: [];
  isLogged = false
  cartCount = 0;
  constructor(private service: WebServiceService,
    private router: Router) {

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

  ngOnInit(): void {
    this.service.getAllExamName().subscribe(data => {
      console.log(data);
      this.examName = data.data
      console.log("Data Array : ", this.examName);
    })
    this.getCartCount()
  }

  navigate(id){
    // this.router.navigate(['/exams/',id]) 
    this.router.navigate(['/exams/',id]);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
    };
  }

}
