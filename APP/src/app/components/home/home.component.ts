import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

interface Product {
	title: string;
	description: string;
	image: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	baseurl = 'http://localhost/ProductDisplay/WEB/images/';

	allProducts: Product[];
	totalProducts = 0;

	topOfQueue = 0;

	queuedProducts: Product[];

	isShown = false;
	intervalId;

	constructor(private api: ApiService, private ref: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.listProducts();
		this.repeatFor30Seconds();
	}

	repeatFor30Seconds() {
		this.intervalId = setInterval(() => {
			if (this.topOfQueue < this.allProducts.length - 6) {
				this.increamentTopOfQueue();
				// this.ref.detectChanges();
			}
		}, 3000);
	}

	increamentTopOfQueue() {
		this.topOfQueue += 1;
		this.setQueue();
	}

	setQueue() {
		this.queuedProducts = this.allProducts.filter(
			(_, index) =>
				index >= this.topOfQueue && index < this.topOfQueue + 6
		);
	}

	listProducts() {
		this.api.listProducts().subscribe(
			(res: any) => {
				console.log(res);
				this.allProducts = res;
				this.totalProducts = this.allProducts.length;
				this.setQueue();
			},
			(err) => {
				console.log(err);
			}
		);
	}

	showOrHide() {
		if (!this.isShown) {
			this.isShown = true;
			this.topOfQueue = 0;
			clearInterval(this.intervalId);
			this.queuedProducts = JSON.parse(JSON.stringify(this.allProducts));
		} else {
			this.isShown = false;
			this.setQueue();
			this.repeatFor30Seconds();
		}
	}
}
