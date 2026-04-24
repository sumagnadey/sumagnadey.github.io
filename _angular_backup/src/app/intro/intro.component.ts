import { Component, Input } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  @Input() darkTheme: boolean = true;
	@Input() msg: any;
	@Input() temperature: any;
	@Input() weather: any;
	@Input() weatherIcon: any;

  facebookIcon = faFacebook;
  instagramIcon = faInstagram;
  linkedInIcon = faLinkedin;
  githubIcon = faGithub;
  temperatureIcon = faTemperatureThreeQuarters;

  constructor() { }

  ngOnInit(): void {
  }
}