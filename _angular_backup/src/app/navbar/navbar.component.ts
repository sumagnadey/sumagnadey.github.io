import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  hamburgerIcon = faBars;
	toggleDarkIcon = faMoon;
	toggleLightIcon = faSun;

	@Input() darkTheme = true;
	smallScreen = true;
	isShowing: boolean = false;

	@Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme()
	{
		this.darkTheme = !this.darkTheme;
		this.newItemEvent.emit(this.darkTheme);
	}

	setHeight() {
		var obj: any = document.getElementById("element");
		// (obj).style.height = "60vh";
		if(this.smallScreen)	(obj).style.height = "380px";
		else{
			(obj).style.height = "0px";
			(obj).style.marginBottom = "170px"
		}
		this.smallScreen = !this.smallScreen;	
	}
}
