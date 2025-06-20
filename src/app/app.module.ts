import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormStatusComponent } from './form-status/form-status.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  imports: [ 
    FormStatusComponent,
    HighlightPipe,
    AdminPanelComponent,
    FormStatusComponent,
    ProfileComponent,
    RegisterComponent,
    UserCardComponent,
    UserListComponent,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
