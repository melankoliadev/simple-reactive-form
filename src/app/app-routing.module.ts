import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user/user-form/user-form.component';
import {UsersComponent} from './user/users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user/tambah',
    component: UserFormComponent
  },
  {
    path: 'user/edit/:userId',
    component: UserFormComponent
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
