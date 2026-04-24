import { Component, Input, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
	@Input() darkTheme: boolean = true;
	@Input() time: any;
	@Input() location: any;
	@Input() weatherBackground: any;

	locationIcon = faLocationDot;

	constructor() {
  	}

	ngOnInit(): void {
	}
}