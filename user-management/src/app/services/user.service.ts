import { Injectable } from '@angular/core';
import { UserProfile } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs';
import { UserStore } from '../store/user.store';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private userStore: UserStore) {}

  // Create a new user
  addUser(user: UserProfile): Observable<void> {
    this.userStore.addUser(of(user));
    return of();
  }

  // Read all users
  getUsers(): Observable<UserProfile[]> {
    return this.userStore.users$;
  }

  // Read a single user by ID
  getUserById(id: number): UserProfile | undefined {
    return this.userStore.getUserById(id);
  }
}


