import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	products = [
		{
			title: 'Product 1',
			description: 'Description 1',
			image: 'assets/images/nobook.png',
		},
		{
			title: 'Product 1',
			description: 'Description 1',
			image: 'assets/images/nobook.png',
		},
		{
			title: 'Product 1',
			description: 'Description 1',
			image: 'assets/images/nobook.png',
		},
		{
			title: 'Product 1',
			description: 'Description 1',
			image: 'assets/images/nobook.png',
		},
		{
			title: 'Product 1',
			description: 'Description 1',
			image: 'assets/images/nobook.png',
		},
		{
			title: 'Product 1',
			description: 'Description 1',
			image: 'assets/images/nobook.png',
		},
	];
	constructor() {}

	ngOnInit(): void {}
}
