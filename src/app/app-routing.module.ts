import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path:'register', component:RegisterComponent},
  {path:'users', component: UserListComponent},

  { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
