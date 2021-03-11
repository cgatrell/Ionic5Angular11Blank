import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';  //Use a service to contain the login functionality.
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  UserName: string = "";
  Password: string = "";
  isValid: boolean = false;
  // change the vale of the descriptors if you want to change the text next to 
  // the login field boxes.
  EmployeeDescriptor: string = "Employee";
  PasswordDescriptor: string = "Password";
  Title: string = "Welcome to Soft Clock";

  ngOnInit() {
  }

  constructor(private loginService: LoginService) {
  }

  loginUser(): void{
      
      let loginUserElement = <HTMLInputElement> document.getElementById("loginU");
      let loginPasswordElement = <HTMLInputElement> document.getElementById("loginP");
      this.UserName=loginUserElement.value;
      this.Password=loginPasswordElement.value;
      
      //this.loginService.login(this.UserAbbr, this.Password, this.Database,this.backEnd, UUID).subscribe((response) => {
      //this.loginService.login(this.UserAbbr, this.Password, this.Database,this.backEnd,UUID,LAT,LON).subscribe((response) => {
      this.loginService.login(this.UserName, this.Password).subscribe((response) => {
          
          console.log("login user response: ");
          console.log(response);
          
      }, (error) => {
          console.log(error);
      })   
  }
  validateInfo(): void {
      let loginButtonElement = <HTMLInputElement> document.getElementById("loginB");
      // Angular should have been updating the variables automatically through databinding
      // but it would never update, this is a workaround until it starts working.
      let loginUserElement = <HTMLInputElement> document.getElementById("loginU");
      let loginPasswordElement = <HTMLInputElement> document.getElementById("loginP");
      this.UserName=loginUserElement.value;
      this.Password=loginPasswordElement.value;

      // The conditions here can be changed if you want to enforce propper passwords.
      
      if(this.UserName.length > 0) {
          this.isValid = true;
          // loginButtonElement.disabled = false;
          loginButtonElement.style.backgroundColor = "#5FA2DD";
          loginButtonElement.style.color = "white";
      } else {
          this.isValid = false;
          // loginButtonElement.disabled = true;
          // loginButtonElement.style.backgroundColor = "grey";
          // loginButtonElement.style.color = "black";
      }
  }

  getIsValid(): boolean {
      return this.isValid;
  }

  configure(): void {
      //After setting configured settings, write the new configuration to the json file.

  }
  reset_password(): void {}

  /* Set the width of the side navigation to 250px */
  openNav(): void {
      document.getElementById("mySidenav").style.width = "250px";
      // this line pushes the page to the right.
      document.getElementById("main").style.marginLeft = "250px";
      // this line makes the backgroundColor slightly darker.
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  /* Set the width of the side navigation to 0 */
  closeNav(): void {
      document.getElementById("mySidenav").style.width = "0";
      // slide the content back to center.
      document.getElementById("main").style.marginLeft = "0";
      // change the background back to white.
      document.body.style.backgroundColor = "white";
  } 
}
