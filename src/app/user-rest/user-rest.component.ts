import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-rest',
  templateUrl: './user-rest.component.html',
  styleUrls: ['./user-rest.component.css']
})
export class UserRestComponent implements OnInit {
  user: User = new User("","","","")
  constructor() { }
  ngOnInit(): void {
  }

}
