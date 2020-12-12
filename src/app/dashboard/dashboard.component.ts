import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/shared/web-service.service';

// import { HeaderComponent  } from "./../common/header/header.component"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData
  examName: []
  data: []
  constructor(private service: WebServiceService) { }



  ngOnInit(): void {
    this.userData = JSON.parse(localStorage['userData']);
    // this.head.addToCart(50);

    this.getAllExam();
    this.getPurchasedExam()
  }

  getAllExam(){

    this.service.getAllExamName().subscribe(data => {
      console.log("Data: ",data);
      this.examName = data.data
    })
  }

  getPurchasedExam(){
    var obj = {
      user_id :  this.userData._id
    }
    console.log("===obj",obj)
    this.service.getPurchasedExam(obj).subscribe(data => {
      console.log("Data: ",data);
      this.data = data.data
    })
  }

}
