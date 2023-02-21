import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  submitted: boolean = false;

   cars: Array<{picture: string, brand: string, model: string, ps: number, buildingyear: number, price: number }> = [
    {
      picture: "https://hips.hearstapps.com/hmg-prod/images/2022-porsche-taycan-sport-turismo-gts-19-1638148404.jpg?crop=0.702xw:0.527xh;0.173xw,0.359xh&resize=1200:*", brand: "Porsche", model: "Taican", ps: 700, buildingyear: 2011, price: 220000
    },
    {
      picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg/1200px-2018_Mercedes-Benz_A200_AMG_Line_Premium_Automatic_1.3_Front.jpg", brand: "Mercedes", model: "A-Class", ps: 550, buildingyear: 2017, price: 150000
    },
    {
      picture: "https://i.auto-bild.de/mdb/extra_large/41/c8-ef3.png", brand: "Audi", model: "A6", ps: 400, buildingyear: 2021, price: 80000
    },
    {
      picture: "https://i.auto-bild.de/mdb/extra_large/86/2-517.png", brand: "BMW", model: "X1", ps: 600, buildingyear: 2022, price: 100000
    }
  ]


  carform: any = new FormGroup({
    picture: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    ps: new FormControl('', Validators.required),
    buildingyear: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });


  pushCar() {
    console.log(this.carform.value)
    this.cars.push(this.carform.value);
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false
    }, 5000);
  }
}
