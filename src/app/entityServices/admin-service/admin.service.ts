import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestBaseService } from 'src/app/services/request-base.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

const API_URL_6 = `${environment.BASE_URL_ADMIN}`;

@Injectable({
  providedIn: 'root',
})
export class AdminService extends RequestBaseService{
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService,http);
  }
  
}
