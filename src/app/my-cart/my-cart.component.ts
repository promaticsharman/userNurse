import { Component, OnInit } from '@angular/core';
import { WebServiceService } from "./../../shared/web-service.service"

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr"

@Component({
	selector: 'app-my-cart',
	templateUrl: './my-cart.component.html',
	styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
	stripeTest: FormGroup;
	constructor(
		private service: WebServiceService,
		private route: ActivatedRoute,
		private _sanitizer: DomSanitizer,
		private router: Router,
		private fb: FormBuilder,
		private toastr: ToastrService,
	) { }
	user_id
	cart_items = []
	total = 0
	cart_content
	ngOnInit(): void {
		var user = localStorage['userData'] ? JSON.parse(localStorage['userData']) : '';
		this.user_id = user._id
		this.loadStripe()
		this.myCarts()
		this.getCart()
	}
	handler: any = null;

	checkout() {

		if (localStorage['userData']) {

			var user =localStorage['userData'] ? JSON.parse(localStorage['userData']) : '';
			this.user_id = user._id
			const self = this
			var arr = []
			self.cart_items.forEach((element, ind) => {
				arr.push(element.exam_id._id)
			});
			var data = {
				ids: arr,
				user_id: self.user_id
			}
			self.service.checkPurchases(data).subscribe(data => {
				console.log(data)
				if (data.exist) {
					self.toastr.error("You have alredy purchased");
				} else {

					var handler = (<any>window).StripeCheckout.configure({
						key: 'pk_test_ZGp14jPEqc1O5YofcypFmI4m',
						locale: 'auto',
						token(token: any) {
							// You can access the token ID with `token.id`.
							// Get the token ID to your server-side code for use.
							console.log(token)
							// alert('Token Created!!');
							var obj = {
								user_id: self.user_id,
								token: token.id,
								card: token.card,
								amount: self.total,
								cart_list: self.cart_items,
							}

							console.log("===check", obj)
							self.Payment(obj)

						}
					});

					handler.open({
						name: 'Demo Site',
						description: '2 widgets',
						amount: this.total * 100
					});
				}
			}, err => {
				console.log(err)
				this.service.commonError(err)
			})

		} else {
			// alert('you have to login first')
			this.router.navigate(['/login'])
		}
	}

	Payment(obj) {
		this.service.purchaseItems(obj).subscribe(data => {
			console.log(data)
			if (data.code == 200 || data.code == 201) {
				// this.ngOnInit()
				this.router.navigate(['/dbDashboard'])
			}
		}, err => {
			console.log(err)
			this.service.commonError(err)
		})
	}
	loadStripe() {
		if (!window.document.getElementById('stripe-script')) {
			var s = window.document.createElement("script");
			s.id = "stripe-script";
			s.type = "text/javascript";
			s.src = "https://checkout.stripe.com/checkout.js";
			s.onload = () => {
				this.handler = (<any>window).StripeCheckout.configure({
					key: 'pk_test_ZGp14jPEqc1O5YofcypFmI4m',
					locale: 'auto',
					token: function (token: any) {
						// You can access the token ID with `token.id`.
						// Get the token ID to your server-side code for use.
						console.log(token)
						alert('Payment Success!!');
					}
				});
			}

			window.document.body.appendChild(s);
		}
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

	myCarts() {
		var user_id, session_id;
		if (localStorage['userData']) {
			var user = localStorage['userData'] ? JSON.parse(localStorage['userData']) : '';
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
		}
		this.service.myCart(obj).subscribe(data => {
			console.log(data)
			let total = 0
			this.total = 0.00
			if (data.code == 200 || data.code == 201) {
				this.cart_items = data.data
				this.cart_items.forEach((element, index) => {
					total += element.exam_id.price
					if (this.cart_items.length - 1 == index) {
						this.total = total
					}
					return "adh";
				});
				// this.router.navigate(['myCart']);
			}

		}, err => {
			console.log(err)

			this.service.commonError(err)
		})
	}

	removeCart(exam_id) {
		var user_id, session_id;
		if (localStorage['userData']) {
			var user = localStorage['userData'] ? JSON.parse(localStorage['userData']) : '';
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
			exam_id: exam_id
		}
		this.service.removeCart(obj).subscribe(data => {
			console.log(data)
			let total = 0
			if (data.code == 200 || data.code == 201) {
				this.ngOnInit()
				// this.router.navigate(['myCart']);
			}

		}, err => {
			console.log(err)

			this.service.commonError(err)
		})
	}

	getTotalAmount() {
		var total = 0
		this.cart_items.forEach((element, index) => {
			total += element.exam_id.price
			if (this.cart_items.length - 1 == index) {
				console.log(total)
				// let abc = total
				return total
			}
			return "adh";
		});
	}

	getCart() {
		this.service.getCart().subscribe(data => {
			console.log(data)
			this.cart_content = data.data
		}, err => {
			console.log(err)
			this.service.commonError(err)
		})
	}


}
