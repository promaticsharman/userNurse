import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import * as Rx from "rxjs/Rx";
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../environments/environment.prod';
import { ToastrService } from 'ngx-toastr';

// const token = 'Bearer,' + JSON.parse(localStorage.getItem('token'));
var httpOptions: any = {}
if (localStorage.getItem('token')) {
  // alert("dsf");
  httpOptions = {
    headers: new HttpHeaders({

      // 'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    })
  };


}


@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  // token = localStorage['token']
  apiUrl = environment.ENDPOINT;
  // headers = new HttpHeaders().set('Content-Type', 'application/json').set('authorization', this.token);

  constructor(private httpClient: HttpClient, public toastr: ToastrService) {
    console.log(httpOptions);
    // console.log(JSON.parse(localStorage.getItem('token')));
    // console.log(token);

  }


  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage;
    let obj = {};
    if (error.error instanceof ErrorEvent) {
      obj = {
        message: error.error,
        status: error.status,
      };
      errorMessage = obj;
    } else {
      obj = {
        message: error.error,
        status: error.status,
      };
      errorMessage = obj;
      // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //console.log(errorMessage.message.errors);
    console.log(errorMessage);
    console.log(error);
    // this.toastr.error(errorMessage.message.errors.msg)
    return throwError(errorMessage);
  }

  commonError(error) {
    var errorMessage = "Something went wrong here";

    if (error.message && error.message.errors) {
      errorMessage = error.message.errors.msg;
    }


    this.toastr.error(errorMessage)
  }


  // Create
  getExamAndStates(): Observable<any> {
    const API_URL = `${this.apiUrl}/get_exams_and_states`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  getFaqs(): Observable<any> {
    const API_URL = `${this.apiUrl}/getFaqs`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  getCartCount(form): Observable<any> {
    const API_URL = `${this.apiUrl}/get/cart/count`;
    return this.httpClient.post(API_URL, form)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }


  getExamDetails(form): Observable<any> {
    const API_URL = `${this.apiUrl}/getExamDetailsById`;
    return this.httpClient.post(API_URL, form)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }

  addToCarts(data): Observable<any> {
    let API_URL = `${this.apiUrl}/addCart`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  myCart(data): Observable<any> {
    let API_URL = `${this.apiUrl}/get/my/cart`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  purchaseItems(data): Observable<any> {
    let API_URL = `${this.apiUrl}/purchasePlan`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  checkPurchases(data): Observable<any> {
    let API_URL = `${this.apiUrl}/checkPurchases`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  removeCart(data): Observable<any> {
    let API_URL = `${this.apiUrl}/removeCart`;
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getCart(): Observable<any> {
    let API_URL = `${this.apiUrl}/getCart`;
    console.log(API_URL);
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }

  getBooks(): Observable<any> {
    const API_URL = `${this.apiUrl}/getBooks`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  register(form): Observable<any> {
    const API_URL = `${this.apiUrl}/register`;
    return this.httpClient.post(API_URL, form)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }

  checkemail(form): Observable<any> {
    const API_URL = `${this.apiUrl}/checkEmailExist`;
    return this.httpClient.post(API_URL, form)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }

  // Get
  GetTask(): Observable<any> {
    const API_URL = `${this.apiUrl}/get-task`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }

  // delete
  DeleteTask(id): Observable<any> {
    const API_URL = `${this.apiUrl}/delete-task/{id}`;
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }

  // Update
  updateTask(id, data): Observable<any> {
    const API_URL = `${this.apiUrl}/update-task/${id}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  ////login
  login(data): Observable<any> {
    const API_URL = `${this.apiUrl}/login`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  ////sign up
  SignUp(data): Observable<any> {
    const API_URL = `${this.apiUrl}/prepare-organization`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }



  CompleteSignUp(data): Observable<any> {
    const API_URL = `${this.apiUrl}/onboard-organization`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  ////OTP Verify
  OTPVerify(data): Observable<any> {
    const API_URL = `${this.apiUrl}/verify-org-otp`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  ////Edit profile
  EditProfile(data): Observable<any> {
    console.log(data);
    const API_URL = `${this.apiUrl}/edit-org-profile`;
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  ////Edit profile
  ChangePassword(data): Observable<any> {
    console.log(data);
    const API_URL = `${this.apiUrl}/change-password`;
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }
  ////forget password
  RequestForgotOtp(data): Observable<any> {
    const API_URL = `${this.apiUrl}/org/request_forgot_otp`;
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  ////Add User
  AddNewUser(data): Observable<any> {
    const API_URL = `${this.apiUrl}/add-user`;
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  AddNewUserCSV(data): Observable<any> {
    const API_URL = `${this.apiUrl}/add-user-csv`;
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  // delete  ?page=${offset}&limit=${limit}
  GetAllUser(page, limit): Observable<any> {
    console.log(httpOptions, "/n/n/n/n/n/n/n/n/n/n");
    const API_URL = `${this.apiUrl}/get-all-user?page=${page}&limit=${limit}`;
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }
  aboutUs(): Observable<any> {
    const API_URL = `${this.apiUrl}/about-us`;
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }
  howItWorks(): Observable<any> {
    const API_URL = `${this.apiUrl}/how-its-works`;
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }
  terms(): Observable<any> {
    const API_URL = `${this.apiUrl}/terms`;
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }
  faq(): Observable<any> {
    const API_URL = `${this.apiUrl}/faq`;
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }
  GetsUBSCRIPTIONPlan(page, limit, order): Observable<any> {
    console.log("------------- > ", localStorage.getItem('token'));
    const API_URL = `${this.apiUrl}/get-subscription-plan?page=${page}&limit=${limit}&order=${order}`;
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }
  BuyOrganizationSubscription(data): Observable<any> {
    const API_URL = `${this.apiUrl}/buy-subscription-plan`;
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }

  // delete
  GetOneUserData(id): Observable<any> {
    const API_URL = `${this.apiUrl}/get-single-user/${id}`;
    console.log('sdfsdafsdf', API_URL)
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      );
  }
  // delete
  getSubscriptionData(id): Observable<any> {
    const API_URL = `${this.apiUrl}/get-organization-subscription/` + id;
    //console.log('sdfsdafsdf=========================', API_URL)
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      );
  }
  getAllUserList(): Observable<any> {
    const API_URL = `${this.apiUrl}/get-all-users`;
    console.log('sdfsdafsdf=========================', API_URL)
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      );
  }
  transferCreditstoUsers(data): Observable<any> {
    const API_URL = `${this.apiUrl}/transfer/credits/to/users`;
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }
  ContactUs(data): Observable<any> {
    const API_URL = `${this.apiUrl}/contact-us`;
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.error)
      );
  }

  getAllBookCategory(): Observable<any> {
    let API_URL = `${this.apiUrl}/getAllBookCategory`
    console.log(API_URL);
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getBooksByCategoryIds(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getBooksByCategoryIds`
    var obj = {
      ids: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getAllExamName(): Observable<any> {
    let API_URL = `${this.apiUrl}/getAllExams`
    console.log(API_URL);
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
  getPurchasedExam(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getPurchasedExam`
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getChapterByExamId(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getChapterByExamId`
    var obj = {
      ids: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getChapterByExam(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getChapterByExam`
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
  getChapterAndTopicsByExam(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getChapterAndTopicsByExam`
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
  getTopicByChapter_id(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getTopicByChapter_id`
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getUserDetails(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getUserDetails`
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  editUser(data): Observable<any> {
    let API_URL = `${this.apiUrl}/editUser`
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  changePassword(data): Observable<any> {
    let API_URL = `${this.apiUrl}/changePassword`
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
  changeEmail(data): Observable<any> {
    let API_URL = `${this.apiUrl}/changeEmail`
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
  getTopicsByChapterId(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getTopicsByChapterId`
    var obj = {
      ids: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getChapterNameById(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getChapterNameById`
    var obj = {
      ids: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getStudyMaterialByTopicID(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getStudyMaterialByTopicID`
    var obj = {
      ids: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getQuestionsByTopic(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getQuestionsByTopic`
    console.log(API_URL);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }


  //Add To File Zila Server

  getFaqsByExamID(data): Observable<any> {
    let API_URL = `${this.apiUrl}/getFaqsByExamID`
    var obj = {
      ids: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  replaceSessionWithUserId(data): Observable<any> {
    const API_URL = `${this.apiUrl}/replaceSessionWithUserId`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }
  getAllChapter(): Observable<any> {
    let API_URL = `${this.apiUrl}/getAllChapter`
    console.log(API_URL);
    return this.httpClient.get(API_URL, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  updateUserProfile(data): Observable<any> {
    const API_URL = `${this.apiUrl}/updateUserProfile`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        map(res => {
          return res;
        }),
        retry(1),
        catchError(this.error)
      );
  }

  getBooksByExamId(data): Observable<any>{
    let API_URL = `${this.apiUrl}/booksByExamId`
    var obj = {
      ids: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

  getQuestionsByID(data): Observable<any>{
    let API_URL = `${this.apiUrl}/getQuestionsByID`
    var obj = {
      id: data
    }
    console.log(API_URL);
    return this.httpClient.post(API_URL, obj, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }

   saveAnswer(data): Observable<any> {
    let API_URL = `${this.apiUrl}/save/user/score`
    console.log('inside-->', API_URL, data);
    return this.httpClient.post(API_URL, data, httpOptions)
      .pipe(
        map(res => {
          return res
        }),
        catchError(this.error)
      )
  }
}
