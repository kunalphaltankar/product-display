import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	title: string;
	description: string;
	image: File;

	constructor(private api: ApiService) {}

	ngOnInit(): void {}

	onImageSelect(event) {
		this.image = event.target.files[0];
	}

	onSubmit(event) {
		console.log(event);

		if (!this.title) {
			alert('Please enter title');
			return;
		}
		if (!this.description) {
			alert('Please enter description');
			return;
		}
		if (!this.image) {
			alert('Please select image');
			return;
		}

		console.log(this.title, this.description, this.image);
		const formData = new FormData();
		formData.append('image', this.image);
		formData.append('title', this.title);
		formData.append('description', this.description);

		this.api.registerProduct(formData).subscribe(
			(res: any) => {
				console.log(res);
				if (!!res.body) {
					alert(res.body.title + ' registered successfully!');
				}
			},
			(err) => {
				console.log(err);
				alert(err.error.text);
			}
		);
	}
}
