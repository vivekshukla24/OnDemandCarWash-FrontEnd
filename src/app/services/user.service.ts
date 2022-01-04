import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.BASE_URL_USER}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }
}
