import { Component, Input } from '@angular/core';
import { faArrowLeft, faBath, faBed, faBookOpenReader, faBuildingColumns, faDoorOpen, faGraduationCap, faLocationDot, faSchool, faStar, faTimeline, faUpRightFromSquare, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edu-update',
  templateUrl: './edu-update.component.html',
  styleUrls: ['./edu-update.component.css']
})
export class EduUpdateComponent {
  @Input() darkTheme: boolean = true;
  starIcon = faStar;
  userIcon = faUser;
  doorIcon = faDoorOpen;
  bedIcon = faBed;
  bathIcon = faBath;
  arrowLeftIcon = faArrowLeft;
  locationIcon = faLocationDot;
  timelineIcon = faTimeline;
  graduationIcon = faGraduationCap;
  academyIcon = faBuildingColumns;
  schoolIcon = faSchool;
  scoreIcon = faBookOpenReader
  linkIcon = faUpRightFromSquare
}
