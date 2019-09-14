import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './user/users/users.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserFormComponent]
})
export class AppModule {}
