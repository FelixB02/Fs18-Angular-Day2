import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  submittedsub: boolean = false;
  submittedcon: boolean = false;

  subscribe: any = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
    emailadress: new FormControl('', Validators.required),
  });

  printMessage() {
    this.submittedsub = true
    setTimeout (() => {
      this.submittedsub = false;
    }, 5000)
  }
  

  concern: any = new FormGroup({
    fullname: new FormControl('', Validators.required),
    emailadress: new FormControl('', Validators.required),
    concern: new FormControl('', Validators.required),
    })

    printMessage2() {
      this.submittedcon = true;
      setTimeout(() => {
        this.submittedcon = false;
      }, 5000)
      }
}
