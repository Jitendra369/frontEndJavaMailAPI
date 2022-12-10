import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent {
  message: string = "";

  data = {
    to: "",
    subject: "",
    message: ""
  }

  spninnerFlag:boolean = false;

  constructor(private email_service: EmailService, private snack:MatSnackBar) { }

  doSubmitForm() {

    console.log("trying to submit from..");
    console.log("data submitted is :" + this.data + this.data.to);

    if (this.data.to == "" || this.data.subject == "" || this.data.message == "") {
      this.message = "please fill all the fields"
      this.snack.open("Fields cannot be empty","ok");
    } else {

      this.spninnerFlag= true;
      this.email_service.sendEmail(this.data).subscribe(
        response => {
          console.log("Email status Response:");
          console.log(response);
          this.spninnerFlag= false;
        },
        error => {
          console.log("something went wrong");
          console.log(error);
          this.spninnerFlag = false;
          
        }
      )
    }
  }
}
