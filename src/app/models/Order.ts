import { Car } from "./Car";

export class Order {
  orderId: number = 0;
  washerName: string = "";
  washpackId: number = 0;
  phoneNo: number =0;
  status: string = "";
  cars: Array<Car> = [];
  
}