import { Injectable } from '@angular/core';
import { UserProfile } from '../interfaces/user.interface';

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
  addUser(user: UserProfile): void {
    this.users.push(user);
  }

  // Read all users
  getUsers(): UserProfile[] {
    return this.users;
  }

  // Read a single user by ID
  getUserById(id: number): UserProfile | undefined {
    return this.users.find(user => user.id === id);
  }

  // Update a user by ID
  updateUser(id: number, updatedUser: UserProfile): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  // Delete a user by ID
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
