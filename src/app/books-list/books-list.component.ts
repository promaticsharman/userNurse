import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WebServiceService } from 'src/shared/web-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { HeaderComponent  } from "./../common/header/header.component"

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  data
  bookCategoryList:any = []
  selectedCategory = {
    category: ""
  }
  allCategory:any = [];
  constructor(
    private toastr: ToastrService,
    private service: WebServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private _sanitizer:DomSanitizer,
    private head : HeaderComponent
  ) { }

  ngOnInit(): void {
    this.head.addToCart(50);
    localStorage['cart'] = 50;
    this.getBooks();
    this.getCategory();
  }

  getBooks() {
    this.service.getBooks().subscribe(data => {
      console.log(data)
      if (data.code == 200 || data.code == 201) {
        this.data = data.data;
      }
    }, err => {
      console.log(err)

      this.service.commonError(err)
    })
  }
  

  getCategory(){
    this.service.getAllBookCategory().subscribe(data => {
      console.log(data);
      this.bookCategoryList = data.data
      console.log("Data Array : ", this.bookCategoryList);
    })
  }

  categoryCheck(cat,MatCheckboxChange){
    console.log(cat);
    
    //alert("bjwdwe")
    //this.selectedCategory.category.push();
    //console.log(this.selectedCategory.category.push());
    if(MatCheckboxChange.checked == true){
      this.allCategory.push(cat._id);
      console.log(this.allCategory) 
      this.service.getBooksByCategoryIds(this.allCategory).subscribe(data => {
        console.log(data)
        if (data.code == 200 || data.code == 201) {
          this.data = data.data;
        }
      }, err => {
        console.log(err)
        this.service.commonError(err)
    })
    }else{
      const index: number = this.allCategory.indexOf(cat._id);
      if (index !== -1) {
          this.allCategory.splice(index, 1);
      }
              
      //console.log(this.allCategory);
     // this.allCategory.push(cat._id);
      //console.log(this.allCategory) 
      this.service.getBooksByCategoryIds(this.allCategory).subscribe(data => {
        console.log("data : ",data)
        if (data.code == 200 || data.code == 201) {
          this.data = data.data;
        }
      }, err => {
        console.log(err)
        this.service.commonError(err)
    })
    }
         
  }

  transform(v: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }

}
