import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private snack:MatSnackBar) {
  }

  btnClick() {
    console.log("btn click");
    this.snack.open("hey, welcome to Email App","Cancel");

  }
}
