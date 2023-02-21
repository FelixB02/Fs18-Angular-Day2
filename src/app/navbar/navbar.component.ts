import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  projektname: string = "Cars";
  moneycount: number = 0;

  counter() {
    this.moneycount += 10;
}

}
