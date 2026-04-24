import { Component, Input, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-certification',
	templateUrl: './certification.component.html',
	styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
	@Input() darkTheme: boolean = true;

	rightIndicatorIcon = faAngleRight;
	leftIndicatorIcon = faAngleLeft;

	slideIndex = 0;

	// autoplay slides --------
	timer = 7; // sec
	_timer = this.timer;

	constructor() {
		// this function runs every 1 second
		setInterval(() => {
			this.timer--;
		  
			if (this.timer < 1) {
				this.nextSlide();
				this.timer = this._timer; // reset timer
			}
		}, 1000); // 1sec
	}

	ngOnInit(): void {
		this.showSlides();
	}

	nextSlide() {
		this.slideIndex++;
		this.showSlides();
		this.timer = this._timer; // reset timer
	}

	prevSlide() {
		this.slideIndex--;
		this.showSlides();
		this.timer = this._timer;
	}

	// Thumbnail image controlls
	currentSlide(n: number) {
		this.slideIndex = n - 1;
		this.showSlides();
		this.timer = this._timer;
  	}
  
	showSlides() {
		const slides = document.querySelectorAll<HTMLElement>(".mySlides");
		const dots = document.querySelectorAll<HTMLElement>(".dots");
	
		if(this.slideIndex > slides.length - 1)	this.slideIndex = 0;
		if(this.slideIndex < 0)	this.slideIndex = slides.length - 1;
		
		// hide all slides
		slides.forEach((slide) => {
			slide.style.display = "none";
		});
		
		// // show one slide base on index number
		slides[this.slideIndex].style.display = "block";
		
		dots.forEach((dot) => {
			dot.classList.remove("active");
		});
		
		dots[this.slideIndex].classList.add("active");
	}
}