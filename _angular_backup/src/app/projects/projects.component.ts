import { Component, Input, OnInit } from '@angular/core';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  codeIcon = faCode;
  extLinkIcon = faExternalLinkAlt;
  @Input() darkTheme: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}