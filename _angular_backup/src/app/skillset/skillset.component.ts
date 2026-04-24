import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  @Input() darkTheme: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}