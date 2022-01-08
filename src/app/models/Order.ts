import { Car } from "./Car";

export class Order {
  orderId: string = "";
  useremailid: string = "";
  washerName: string = "";
  washpackId: number = 0;
  phoneNo: number =0;
  areapincode: string = "";
  status: string = "";
  cars: Car = new Car(1,"","");
}