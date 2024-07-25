import { Injectable } from '@angular/core';
import { UserProfile } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: UserProfile[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      username: 'john.doe',
      isAdmin: false,
      department: 'Marketing'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      username: 'jane.smith',
      isAdmin: true,
      department: 'Management'
    },
    {
      id: 3,
      firstName: 'Alice',
      lastName: 'Johnson',
      username: 'alice.johnson',
      isAdmin: false,
      department: 'Maintenance'
    }
  ];

  constructor() { }

  // Create a new user
  addUser(user: UserProfile): Observable<void> {
    var newUserId = this.users[this.users.length-1].id + 1;
    user.id = newUserId;
    this.users.push(user);
    return of();
  }

  // Read all users
  getUsers(): Observable<UserProfile[]> {
    return of(this.users);
  }

  // Read a single user by ID
  getUserById(id: number): UserProfile | undefined {
    return this.users.find(user => user.id === id);
  }

}
function Of(users: UserProfile[]): UserProfile[] {
  throw new Error('Function not implemented.');
}

