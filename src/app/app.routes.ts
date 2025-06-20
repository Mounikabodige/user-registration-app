import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { UserListComponent } from "./user-list/user-list.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AuthGuard } from "./auth.guard";

export const appRoutes : Routes = [
      {path: '', redirectTo: '/register', pathMatch: 'full'},
      { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard] },
      {path:'register', component: RegisterComponent},
      {path:'users', component: UserListComponent},
      {path: '**', redirectTo:'register'},
    ];