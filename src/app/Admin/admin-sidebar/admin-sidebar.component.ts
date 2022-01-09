import { Component, OnInit } from '@angular/core';
import { faHome, faShoppingBag, faPlus, faInfoCircle, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css'],
})
export class AdminSidebarComponent implements OnInit {
  home = faHome;
  shoppingbag=faShoppingBag;
  plus=faPlus;
  info =faInfoCircle;
  phone =faPhoneSquareAlt;
  constructor() {}

  ngOnInit(): void {}
}
