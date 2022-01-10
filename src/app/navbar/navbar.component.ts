import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  car = faCar;
  currentUser: User = new User();
  role: string = '';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
      var iterator = this.currentUser?.roles?.values();
      this.role = iterator?.next()?.value['role'];
      console.log(this.role);
    });
  }

  ngOnInit(): void {}
  aboutus = () => {
    this.router.navigateByUrl('/aboutus');
  };
  contactus = () => {
    this.router.navigateByUrl('/contact');
  };
  gotoHome() {
    this.router.navigateByUrl('/home');
  }

  //finding the current loggedin role
  isAdmin() {
    return this.role === 'ADMIN';
  }
  isCompany() {
    return this.role === 'COMPANY';
  }
  isUser() {
    return this.role === 'USER';
  }

  //logging out the user
  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }

  //Displaying the role on navbar
  properRole() {
    if (this.isAdmin()) {
      this.router.navigate(['/admin']);
    } else if (this.isCompany()) {
      this.router.navigate(['/company']);
    } else {
      this.router.navigate(['/user']);
    }
  }
}
