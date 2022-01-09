import { Car } from "./Car";

export class Order {
  orderId: string;
  useremailid: string="";
  washerName: string="";
  washpackId: number;
  phoneNo: number;
  areapincode: string="";
  status: string="";
  cars: Car = new Car();
  
  //Empty Constructor
  Order() {

  }
}