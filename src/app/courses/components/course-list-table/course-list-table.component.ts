import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../../services/courses/course.service';

@Component({
  selector: 'app-course-list-table',
  standalone: false,
  templateUrl: './course-list-table.component.html',
  styleUrl: './course-list-table.component.scss'
})
export class CourseListTableComponent implements OnInit {
  courseList: any[] = [];
  loading: boolean = true;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    // this.getCourseList();
  }

  // getCourseList() {
  //   this.courseService.getList().subscribe((res) => {
  //     this.courseList = res;
  //     this.loading = false;
  //     console.log('Course List >>', this.courseList);
  //   });
  // }

  // getPaymentMethod(method: OrderPaymentMethod) {
  //   switch (method) {
  //     case OrderPaymentMethod.bank_transfer:
  //       return 'Transferencia Bancaria';
  //     case OrderPaymentMethod.card:
  //       return 'Tarjeta';
  //     case OrderPaymentMethod.cash:
  //       return 'Efectivo';
  //     case OrderPaymentMethod.mercado_pago:
  //       return 'Mercado Pago';
  //     default:
  //       return 'Transferencia Bancaria'
  //   }
  // }
}
