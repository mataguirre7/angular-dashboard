import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CourseDTO } from '../../../shared/models/course-dto';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = `${environment.apiUrl}/course`;

  constructor(private http: HttpClient) {}

  getList(): Observable<CourseDTO[]> {
    return this.http
      .get<{
        status: string;
        message: string;
        data: { items: CourseDTO[]; totalCount: number };
      }>(`${this.apiUrl}`)
      .pipe(map((response) => response.data.items));
  }

  get(id: string): Observable<CourseDTO> {
    return this.http
      .get<{ status: string; message: String; data: CourseDTO }>(
        `${this.apiUrl}/${id}`
      )
      .pipe(map((response) => response.data));
  }

  create(order: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${this.apiUrl}/create`, order);
  }

  update(orderId: string, order: CourseDTO): Observable<CourseDTO> {
    return this.http.patch<CourseDTO>(
      `${this.apiUrl}/update/${orderId}`,
      order
    );
  }

  delete(orderId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${orderId}`);
  }
}
