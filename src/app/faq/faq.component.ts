import { Component, OnInit } from '@angular/core';
import { environment } from "./../../environments/environment.prod"
import { ToastrService } from "ngx-toastr"
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService } from "./../../shared/web-service.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  data
  panelOpenState = false;
  constructor(
    private toastr: ToastrService,
    private service: WebServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getFaqs()
  }

  getFaqs() {
    this.service.getFaqs().subscribe(data => {
      console.log(data)
      if (data.code == 200 || data.code == 201) {
        this.data = data.data;
      }
    }, err => {
      console.log(err)

      this.service.commonError(err)
    })
  }

}
