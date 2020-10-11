import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	name: string;
	description: string;
	image: File;

	constructor() {}

  ngOnInit(): void {}
  
  // onImageSelect(event){
  //   this.image = event.target.files[0];
  // }

	onSubmit() {
		console.log(this.name, this.description, this.image);
	}
}
