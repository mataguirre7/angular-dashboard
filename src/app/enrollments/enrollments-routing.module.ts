import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentListPageComponent } from './pages/enrollment-list-page/enrollment-list-page.component';

const routes: Routes = [{ path: '', component: EnrollmentListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollmentsRoutingModule {}
