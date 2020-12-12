import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-chapters',
  templateUrl: './exam-chapters.component.html',
  styleUrls: ['./exam-chapters.component.scss']
})
export class ExamChaptersComponent implements OnInit {

	first
	second
	third

	constructor() { }

	ngOnInit(): void {
		this.first = true
		this.second = false
		this.third = false
	}

	changeDiv(div){
		if(div == 'first'){
			this.first = false
			this.second = true
			this.third = false
		}else if(div == 'second'){
			this.first = false
			this.second = false
			this.third = true
		}
	}

}
