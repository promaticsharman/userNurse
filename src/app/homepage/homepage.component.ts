import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { WebServiceService } from 'src/shared/web-service.service';

declare const paral: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
	examName: [];
	heroOpt: OwlOptions = {
	    loop: true,
	    mouseDrag: false,
	    touchDrag: false,
	    pullDrag: false,
	    dots: false,
	    navSpeed: 700,
	    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
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

	customOptions: OwlOptions = {
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
	      400: {
	        items: 2
	      },
	      740: {
	        items: 3
	      },
	      940: {
	        items: 4
	      }
	    },
	    nav: true
	}

	testOptions: OwlOptions = {
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
	        items: 3
	      }
	    },
	    nav: true,
	    autoplay:true
	}

  	constructor(private service: WebServiceService) { }

	  ngOnInit(): void {
		this.service.getAllExamName().subscribe(data => {
			console.log(data);
			this.examName = data.data
			console.log("Data Array : ", this.examName);
		  })

	  }

}
