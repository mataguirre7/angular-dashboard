import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentListPageComponent } from './pages/enrollment-list-page/enrollment-list-page.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';

@NgModule({
  declarations: [
    EnrollmentListPageComponent,
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule
  ]
})
export class EnrollmentsModule { }
