import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  emailIcon = faEnvelope;
  phoneIcon = faPhone;
  githubIcon = faGithub;
  linkedIcon = faLinkedin;
  whatsappIcon = faWhatsapp;
  @Input() darkTheme: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}