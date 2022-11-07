import { Component, OnInit } from '@angular/core';
import { LearningAppService } from '../services/learning-app.service';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public learningAppCurrentlyAttending: any = null;
  public learningAppCategories: any = null;
  public learningAppPopularLecturers: any = null;

  constructor(
    private learningAppService: LearningAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.learningAppService.getCurrentlyAttending().subscribe(data => this.learningAppCurrentlyAttending = data);
    this.learningAppService.getCategories().subscribe(data => this.learningAppCategories = data);
    this.learningAppService.getPopularLecturers().subscribe(data => this.learningAppPopularLecturers = data);
  }
}
