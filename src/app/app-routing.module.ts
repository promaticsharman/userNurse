import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
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
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LmsIntroductionComponent } from './lms-introduction/lms-introduction.component';

const routes: Routes = [
	{
		path: '',
		component: HomepageComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'signup',
		component: SignupComponent
	},
	{
		path: 'forgotPassword',
		component: ForgotpasswordComponent
	},
	{
		path: 'booksListing',
		component: BooksListComponent
	},
	{
		path: 'productDetail',
		component: ProductDetailComponent
	},
	{
		path: 'exams/:exam_id',
		component: ExamsComponent
	},
	{
		path: 'myCart',
		component: MyCartComponent
	},
	{
		path: 'checkout',
		component: CheckoutComponent
	},
	{
		path: 'paymentMethod',
		component: PaymentMethodComponent
	},
	{
		path: 'blogListing',
		component: BlogListingComponent
	},
	{
		path: 'blogDetail',
		component: BlogDetailComponent
	},
	{
		path: 'dbDashboard',
		component: DashboardComponent
	},
	{
		path: 'dbProfile',
		component: DbProfileComponent
	},
	{
		path: 'dbEnrolledExams',
		component: DbEnrolledExamsComponent
	},
	{
		path: 'dbMyClassroom',
		component: DbClassroomComponent
	},
	{
		path: 'faq',
		component: FaqComponent
	},
	{
		path: 'contactUs',
		component: ContactUsComponent
	},
	{
		path: 'aboutUs',
		component: AboutUsComponent
	},
	{
		path: 'dbScores',
		component: DbScoresComponent
	},
	{
		path: 'dbPurchaseBooks',
		component: DbPurchasedExamsComponent
	},
	{
		path: 'lms/:exam_id/:exam_name',
		component: CourseDetailComponent
	},
	{
		path: 'lms/:exam_id/:type',
		component: CourseDetailComponent
	},
	{
		path: 'examStarted',
		component: LmsExamStartedComponent
	},
	{
		path: 'examChapters',
		component: ExamChaptersComponent
	},
	{
		path: 'lmsIntroduction/:exam_id/:examName',
		component: LmsIntroductionComponent
	},
	{
		path: 'lmsIntroduction/:exam_id/:type/:exmName',
		component: LmsIntroductionComponent
	},
	{
		path: 'lmsIntroduction/:exam_id/:chapter_id',
		component: LmsIntroductionComponent
	},
	{
		path: 'lmsIntroduction/:exam_id/:chapter_id/:topic_id/:type',
		component: LmsIntroductionComponent	
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
