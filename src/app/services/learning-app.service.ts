import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LearningAppService {
  constructor(private http: HttpClient) { }

  public getCurrentlyAttending(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/411814c4-bebf-4b2c-e661-08dab79fa5b4`);
  }
  public getCategories(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/c7c0f004-5d70-41db-e663-08dab79fa5b4`);
  }
  public getPopularLecturers(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/f2c280b7-2b1b-47c5-e662-08dab79fa5b4`);
  }
  public getAllCourses(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/28f292a3-d187-48c4-e660-08dab79fa5b4`);
  }
}
