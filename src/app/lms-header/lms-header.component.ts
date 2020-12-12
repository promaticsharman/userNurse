import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,Route} from '@angular/router';

@Component({
  selector: 'app-lms-header',
  templateUrl: './lms-header.component.html',
  styleUrls: ['./lms-header.component.scss']
})
export class LmsHeaderComponent implements OnInit {

  userData=<any>{}
  constructor(private router: Router,		private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.userData=JSON.parse(localStorage['userData']);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['../login'], { relativeTo: this.route });
  }
}
