import { Component, OnInit } from '@angular/core';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  edit=faMoneyCheck;
  constructor(private ps: OrderService) { }

  ngOnInit(): void {
  }

  
}
