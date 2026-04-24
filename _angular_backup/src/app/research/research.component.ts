import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  @Input() darkTheme: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}