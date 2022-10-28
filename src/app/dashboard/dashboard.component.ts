import { Component, OnInit } from '@angular/core';
import { LearningAppService } from '../services/learning-app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public learningAppCurrentlyAttending: any = null;
  public learningAppCourseCategories: any = null;
  public learningAppPopularLecturers: any = null;

  constructor(
    private learningAppService: LearningAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.learningAppService.getCurrentlyAttending().subscribe(data => this.learningAppCurrentlyAttending = data);
    this.learningAppService.getCourseCategories().subscribe(data => this.learningAppCourseCategories = data);
    this.learningAppService.getPopularLecturers().subscribe(data => this.learningAppPopularLecturers = data);
  }
}
