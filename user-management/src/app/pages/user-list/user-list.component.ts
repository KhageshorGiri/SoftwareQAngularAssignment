import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserProfile } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    UserDetailComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  allUsers : UserProfile[] | undefined = [];

  constructor(private userServie : UserService) {
  }

  ngOnInit(): void {
   this.userServie.getUsers().subscribe({
    next: (data : UserProfile[] | undefined) => this.allUsers = data,
    error : (error) => alert("Error Fetching User list")
   });
  }


}
