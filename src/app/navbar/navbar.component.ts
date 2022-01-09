import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  car=faCar;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  aboutus = () => {
    this.router.navigateByUrl('/aboutus');
  };
  contactus = () => {
    this.router.navigateByUrl('/contact')
  }
  gotoHome(){
    this.router.navigateByUrl('/home');
  };

}
