import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserProfile } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserListComponent
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  userForm!: FormGroup;

  constructor(
    private router:Router,
    private fb: FormBuilder,
    private userService : UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')]],
      isAdmin: [false, Validators.required],
      department: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData: UserProfile = this.userForm.value;
      this.userService.addUser(userData).subscribe({
        complete : () => {
          this.router.navigate(['/all-users']);
        },
        error: (err) => alert("Error While Adding User.")
      });
    } else {
      alert("Invalid User Form")
    }
  }
}
