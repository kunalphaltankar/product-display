import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private Http: HttpClient) {}

	//Register Product
	registerProduct(data) {
		return this.Http.post(
			'http://localhost/ProductDisplay/WEB/register.php',
			data,
			{
				observe: 'events',
				reportProgress: true,
			}
		);
	}

	//List Products
	listProducts() {
		return this.Http.get(
			'http://localhost/ProductDisplay/WEB/products.php'
		);
	}
}
