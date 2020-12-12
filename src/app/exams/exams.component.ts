import { Component, OnInit } from '@angular/core';
import { WebServiceService } from "./../../shared/web-service.service"

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
	selector: 'app-exams',
	templateUrl: './exams.component.html',
	styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
	exam_details = {
		examName: "",
		price: 0,
		_id: "dfds",
		description_1: "",
		description_2: "",
		heading: "",
		description_3: "",
		about: "",
		validity: ""
	}

	faq_details: []

	heroOpt: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			940: {
				items: 1
			}
		},
		nav: true
	}

	constructor(private service: WebServiceService, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private router: Router) { }

	ngOnInit(): void {
		this.getExamDetails()
		this.getFaqsByExamID()
	}

	makeid(length) {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	addToCarts(exam_id) {
		var user_id, session_id;
		if (localStorage['userData']) {
			var user = JSON.parse(localStorage['userData']);
			user_id = user._id
		}
		if (localStorage['session']) {
			// var user = JSON.parse(localStorage['userData']);
			session_id = localStorage['session']
		} else {
			session_id = this.makeid(10);
			localStorage['session'] = session_id;
		}

		var obj = {
			user_id: user_id,
			session_id: session_id,
			exam_id: exam_id,
		}
		this.service.addToCarts(obj).subscribe(data => {
			console.log(data)
			if (data.code == 200 || data.code == 201) {
				//this.exam_details = data.details
				this.router.navigate(['myCart']);
			}

		}, err => {
			console.log(err)

			this.service.commonError(err)
		})
	}

	getExamDetails() {
		var obj = {
			exam_id: this.route.snapshot.params.exam_id,
		}
		this.service.getExamDetails(obj).subscribe(data => {
			console.log(data)
			if (data.code == 200 || data.code == 201) {
				this.exam_details = data.details
			}
		}, err => {
			console.log(err)

			this.service.commonError(err)
		})
	}

	transform(v: string): SafeHtml {
		return this._sanitizer.bypassSecurityTrustHtml(v);
	}

	getFaqsByExamID() {
		this.service.getFaqsByExamID(this.route.snapshot.params.exam_id).subscribe(faqData => {
			console.log("FAQ by Exam ID : ", faqData);
			if (faqData.code == 200 || faqData.code == 201) {
				this.faq_details = faqData.data
			}
		}, err => {
			console.log(err)

			this.service.commonError(err)
		})
	}

}
