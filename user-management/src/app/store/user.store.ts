import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { UserProfile } from '../interfaces/user.interface';
import { UserState } from '../interfaces/userstate.interface';


@Injectable({
  providedIn: 'root',
})
export class UserStore extends ComponentStore<UserState> {
  constructor() {
    super({ users: [
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
    ] }); // Initialize state with empty users array
  }

  // Selector to get all users
  readonly users$: Observable<UserProfile[]> = this.select(state => state.users);

  // Effect to add a new user
  readonly addUser = this.effect((user$: Observable<UserProfile>) => {
    return user$.pipe(
      tap(user => {
        const state = this.get();
        const newUserId = state.users.length ? state.users[state.users.length - 1].id + 1 : 1;
        this.patchState({
          users: [...state.users, { ...user, id: newUserId }],
        });
      })
    );
  });

  // Effect to set users (e.g., after fetching from an API)
  readonly setUsers = this.updater((state: UserState, users: UserProfile[]) => ({
    ...state,
    users,
  }));

  // Getter to find a user by ID
  getUserById(id: number): UserProfile | undefined {
    return this.get().users.find(user => user.id === id);
  }
}
