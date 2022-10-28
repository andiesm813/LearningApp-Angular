import { Component, OnInit } from '@angular/core';
import { LearningAppService } from '../services/learning-app.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public learningAppAllCourses: any = null;

  constructor(
    private learningAppService: LearningAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.learningAppService.getAllCourses().subscribe(data => this.learningAppAllCourses = data);
  }
}
