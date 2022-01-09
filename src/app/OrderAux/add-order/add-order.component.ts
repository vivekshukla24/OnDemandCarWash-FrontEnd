import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import { OrderService } from '../../services/order.service';
import { faShoppingBasket, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Car } from 'src/app/models/Car';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  errorMessage: string;
  order: Order= new Order();
  constructor(private os: OrderService) {}
  sb = faShoppingBasket;
  ngOnInit(): void {}


  addOrder(order: Order){
    this.os.addOrder(this.order).subscribe(data =>{
      console.log(data);
      Swal.fire("Order Booked")
    });
  }
}
