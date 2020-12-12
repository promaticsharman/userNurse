import { Component, OnInit } from '@angular/core';
import { environment } from "./../../environments/environment.prod"
import { ToastrService } from "ngx-toastr"
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from "./../../shared/web-service.service";
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-db-purchased-exams',
  templateUrl: './db-purchased-exams.component.html',
  styleUrls: ['./db-purchased-exams.component.scss']
})
export class DbPurchasedExamsComponent implements OnInit {
  userData = <any>{}
  data
  examid = []
  purchasedExam = []
  bookData = []
  // _sanitizer
  panelOpenState = false;
  constructor(
    private toastr: ToastrService,
    private service: WebServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage['userData']);
    this.getBooksByPurchasedExam();
    //this.getBooks()
  }

  getBooks() {
    this.service.getBooks().subscribe(data => {
      console.log("Get Books : ",data)
      if (data.code == 200 || data.code == 201) {
        this.data = data.data;
      }
    }, err => {
      console.log(err)
      this.service.commonError(err)
    })
  }

  transform(v: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }

  getBooksByPurchasedExam(){
    var obj = {
      user_id : this.userData._id
    }
    console.log("Get Purchased Exam Obj: ",obj);
    this.service.getPurchasedExam(obj).subscribe(data => {
      console.log("Data : ", data);
      this.purchasedExam = data.data
      console.log("Purchased Exam: ",this.purchasedExam)
      for (let i = 0; i < this.purchasedExam.length; i++) {
        this.service.getBooksByExamId(data.data[i].exam_id._id).subscribe(data => {
        console.log("Books Data : ",data)
        this.bookData.push(data.data[0])
        console.log("Book Data Array : ",this.bookData)
        })
      }
    })
  }
}
