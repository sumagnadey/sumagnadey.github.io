import { Component, Input } from '@angular/core';
import { faBookOpenReader, faBuildingColumns, faGraduationCap, faLocationDot, faSchool, faTimeline, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input() darkTheme: boolean = true;
  locationIcon = faLocationDot;
  timelineIcon = faTimeline;
  graduationIcon = faGraduationCap;
  academyIcon = faBuildingColumns;
  schoolIcon = faSchool;
  scoreIcon = faBookOpenReader
  linkIcon = faUpRightFromSquare
}
