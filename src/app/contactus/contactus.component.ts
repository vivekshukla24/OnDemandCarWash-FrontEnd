import { Component, OnInit } from '@angular/core';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  mobile = faPhone;
  envelope = faEnvelope;
  marker = faMapMarkerAlt;
  constructor() {}

  ngOnInit(): void {}
}
