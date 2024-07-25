import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

export const routes: Routes = [
    {path: "*", component:AppComponent},
    {path: "add-user", component:AddUserComponent},
    {path: "all-users", component:UserListComponent},
    { path: 'details/:userId', component: UserDetailComponent },
];
