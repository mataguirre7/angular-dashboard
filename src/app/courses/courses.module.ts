import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListTableComponent } from './components/course-list-table/course-list-table.component';
import { CourseCreateFormComponent } from './components/course-create-form/course-create-form.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    CourseListPageComponent,
    CourseDetailsPageComponent,
    CourseListTableComponent,
    CourseCreateFormComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    TableModule
  ]
})
export class CoursesModule { }
