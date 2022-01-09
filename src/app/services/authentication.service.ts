import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable, map, BehaviorSubject } from 'rxjs';

const API_URL_4 = `${environment.BASE_URL_AUTH}`;
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
    let storageUser;
    const storageUserAsStr = localStorage.getItem('currentUser');
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr);
    }
    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();

  }
  private currentUserSubject: BehaviorSubject<User>;
  public role: string = '';
  public currentUser: Observable<User>;

  public get currentUserValue(): User {
    console.log(this.currentUserSubject.value);
    return this.currentUserSubject.value;
  }
  register(user: User): Observable<any> {
    return this.http.post(API_URL_4 + '/register', user);
  }
  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User());
  }
}
