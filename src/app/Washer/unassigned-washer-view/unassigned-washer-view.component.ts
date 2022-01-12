import { Component, OnInit } from '@angular/core';
import { WasherService } from 'src/app/entityServices/washer-service/washer.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-unassigned-washer-view',
  templateUrl: './unassigned-washer-view.component.html',
  styleUrls: ['./unassigned-washer-view.component.css']
})
export class UnassignedWasherViewComponent implements OnInit {
  OrderList: Array<Order> =[];
  constructor(private ws: WasherService) { }

  ngOnInit(): void {
    this.getUnassignedOrders();
  }
  
  getUnassignedOrders(){
    this.ws.getUnassignedOrders().subscribe((data)=>{
      this.OrderList=data;
      console.log(data);
    });
  }

}
