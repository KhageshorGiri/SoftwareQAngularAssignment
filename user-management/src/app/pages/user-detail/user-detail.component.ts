import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserProfile } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  user : UserProfile | undefined;

  constructor(private route: ActivatedRoute,
    private userService : UserService) {
    
  }

  ngOnInit(): void {
    const userId =  Number(this.route.snapshot.paramMap.get('userId'));
    console.log(userId);
    this.user = this.userService.getUserById(userId);
  }

}
