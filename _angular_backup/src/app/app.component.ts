import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { faHackerrank, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faChevronUp, faCloudBolt, faCloudRain, faCloudShowersHeavy, faCloudShowersWater, faCloudSun, faDroplet, faIcicles, faLocationDot, faRainbow, faSmog, faSnowflake, faSun, faTemperatureArrowDown, faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
	title = 'portfolio';
	scrollIcon = faChevronUp;
	hackerrankIcon = faHackerrank;
	instagramIcon =  faInstagram;
	locationIcon = faLocationDot;
	temperatureIcon = faTemperatureThreeQuarters;

	darkTheme = false;

	time: any;
	hours: any;
	msg: any;
	location: any;
	urlString: any;
	temperature: any;
	latitude: any;
	longitude: any;
	wcode: any;
	weather: any;
	weatherIcon: any;


	

	weathercode = [
		{
			code: [0],
			desc: 'Clear Sky',
			icon: faSun
		},
		{
			code: [1, 2, 3],
			// desc: 'Mainly clear, partly cloudy, and overcast',
			desc: 'Cloudy',
			icon: faCloudSun
		},
		{
			code: [45, 48],
			// desc: 'Fog and depositing rime fog',
			desc: 'Fog',
			icon: faSmog
		},
		{
			code: [51, 53, 55],
			// desc: 'Drizzle: Light, moderate, and dense intensity',
			desc: 'Drizzle',
			icon: faRainbow
		},
		{
			code: [56, 57],
			// desc: 'Freezing Drizzle: Light and dense intensity',
			desc: 'Freezing Drizzle',
			icon: faDroplet
		},
		{
			code: [61, 63, 65],
			// desc: 'Rain: Slight, moderate and heavy intensity',
			desc: 'Rain',
			icon: faCloudRain
		},
		{
			code: [66, 67],
			// desc: 'Freezing Rain: Light and heavy intensity',
			desc: 'Freezing Rain',
			icon: faCloudShowersHeavy
		},
		{
			code: [71, 73, 75],
			// desc: 'Snow fall: Slight, moderate, and heavy intensity',
			desc: 'Snowfall',
			icon: faTemperatureArrowDown
		},
		{
			code: [77],
			desc: 'Snow Grains',
			icon: faIcicles
		},
		{
			code: [80, 81, 82],
			// desc: 'Rain showers: Slight, moderate, and violent',
			desc: 'Rain Showers',
			icon: faCloudShowersWater
		},
		{
			code: [85, 86],
			// desc: 'Snow showers slight and heavy',
			desc: 'Snow Showers',
			icon: faSnowflake
		},
		{
			code: [95],
			// desc: 'Thunderstorm: Slight or moderate',
			desc: 'Thunderstorm',
			icon: faBolt
		},
		{
			code: [96, 99],
			// desc: 'Thunderstorm with slight and heavy hail',
			desc: 'Thunderstorm with Hail',
			icon: faCloudBolt
		},
	];

	images = [
		{
			imageSrc: 'assets/IITInternship.jpg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/GoogleCloud.png',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/AzureFundamental.jpg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/Bengalathon.jpg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/Udacity.jpg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/AIForMed.jpeg',
			imageAlt: ''
		},
		{
			imageSrc: 'assets/MLStanford.jpeg',
			imageAlt: ''
		},
	];
	constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2, private http: HttpClient) {
		setInterval(() => {
			this.time = new Date();
		}, 1000);

		this.decide();
	}

	ngAfterViewInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			let loader = this.renderer.selectRootElement('#loader');
			if (loader.style.display != "none") loader.style.display = "none";
		}
	}

	ngOnInit(): void {
		this.getData();
	}

	getWeatherDescription() {
		for(let temp of this.weathercode)
		{
			// console.log(temp);
			if(temp.code.includes(this.wcode)) {
				this.weatherIcon = temp.icon;
				this.weather = temp.desc;
			}
		}
	}

	async getData() {
		const res = await fetch('https://ipwho.is/');
		const json = await res.json();
		this.latitude = json.latitude;
		this.longitude = json.longitude;
		this.location = json.region + ", " + json.country;

		this.urlString = "https://api.open-meteo.com/v1/forecast?latitude=" + this.latitude + "&longitude=" + this.longitude + "&current_weather=true&timezone=auto";

		const res2 = await fetch(this.urlString);
		const json2 = await res2.json();
		this.temperature = json2.current_weather.temperature;
		this.wcode = json2.current_weather.weathercode;
		this.getWeatherDescription();
	}

	decide() {
		this.hours = new Date().getHours();
		if(this.hours < 5){
			this.msg = "Hello !";
			this.darkTheme = true;
		}
		else if(this.hours < 12){
			this.msg = " Hi, Good Morning !";
			this.darkTheme = false;
		}
		else if(this.hours == 12){
			this.msg = "Hi, Good Noon !";
			this.darkTheme = false;
		}
		else if(this.hours < 16){
			this.msg = "Hi, Good Afternoon !";
			this.darkTheme = false;
		}
		else if(this.hours < 18){
			this.msg = "Hi, Good Evening !";
			this.darkTheme = false;
		}
		else if(this.hours < 21){
			this.msg = "Hi, Good Evening !";
			this.darkTheme = true;
		}
		else if(this.hours < 24){
			this.msg = "Bonjour !";
			this.darkTheme = true;
		}
	}

	toggleTheme(theme: boolean) {
		this.darkTheme = theme;
	}

	isShow: boolean | undefined;
	topPosToStartShowing = 300;
  
	@HostListener('window:scroll')
	checkScroll() {

	  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
	//   console.log('[scroll]', scrollPosition);
	  
	  if (scrollPosition >= this.topPosToStartShowing) {
		this.isShow = true;
	  } else {
		this.isShow = false;
	  }
	}

	gotoTop() {
	  window.scroll({ 
		top: 0, 
		left: 0, 
		behavior: 'smooth' 
	  });
	}
}