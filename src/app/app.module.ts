import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BooksListComponent } from './books-list/books-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ExamsComponent } from './exams/exams.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DbHeaderComponent } from './common/db-header/db-header.component';
import { DbProfileComponent } from './db-profile/db-profile.component';
import { DbEnrolledExamsComponent } from './db-enrolled-exams/db-enrolled-exams.component';
import { DbClassroomComponent } from './db-classroom/db-classroom.component';
import { DbSidebarComponent } from './common/db-sidebar/db-sidebar.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DbScoresComponent } from './db-scores/db-scores.component';
import { DbPurchasedExamsComponent } from './db-purchased-exams/db-purchased-exams.component';
import { LmsComponent } from './lms/lms.component';
import { LmsExamStartedComponent } from './lms-exam-started/lms-exam-started.component';
import { ExamChaptersComponent } from './exam-chapters/exam-chapters.component';
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {MatExpansionModule} from '@angular/material/expansion';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LmsIntroductionComponent } from './lms-introduction/lms-introduction.component';
import { PlyrModule } from 'ngx-plyr';
import { LmsIntroductionModule } from './lms-introduction/lms-introduction.module';
//import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { LmsHeaderComponent } from './lms-header/lms-header.component';
import { LmsFooterComponent } from './lms-footer/lms-footer.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
//import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
//import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
//import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import {MatRadioModule} from '@angular/material/radio';
//import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
//import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    BooksListComponent,
    ProductDetailComponent,
    ExamsComponent,
    MyCartComponent,
    CheckoutComponent,
    PaymentMethodComponent,
    BlogListingComponent,
    BlogDetailComponent,
    DashboardComponent,
    DbHeaderComponent,
    DbProfileComponent,
    DbEnrolledExamsComponent,
    DbClassroomComponent,
    FaqComponent,
    DbSidebarComponent,
    ContactUsComponent,
    AboutUsComponent,
    DbScoresComponent,
    DbPurchasedExamsComponent,
    LmsComponent,
    LmsExamStartedComponent,
    ExamChaptersComponent,
    CourseDetailComponent,
    LmsIntroductionComponent,
    LmsHeaderComponent,
    LmsFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatTabsModule,
    MatRadioModule,
    ToastrModule.forRoot({
      //timeOut: 10000,
    // positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GooglePlaceModule,
    MatExpansionModule,
    PlyrModule,
    LmsIntroductionModule,
    //NgxExtendedPdfViewerModule
    PdfJsViewerModule,
    DragDropModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
