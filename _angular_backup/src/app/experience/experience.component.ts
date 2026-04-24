import { Component, Input, OnInit } from '@angular/core';
import { faBriefcase, faCalendar, faFlag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() darkTheme: boolean = true;

  briefcaseIcon = faBriefcase;
  calendarIcon = faCalendar;
  flagIcon = faFlag;

  constructor() { }

  ngOnInit(): void {
  }

}