import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
import {
  MatDialog,
  MatDialogRef,
  MatPaginator,
  MatTableDataSource
} from '@angular/material';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserModel[];
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'city',
    'action'
  ];
  dataSource = new MatTableDataSource<UserModel>(this.users);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private userService: UserService, private matDialog: MatDialog) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(resp => {
      this.users = resp;
      this.dataSource.data = this.users;
      this.dataSource.paginator = this.paginator;
    });
  }

  addUser() {
    const userDialog = this.matDialog.open(UserFormComponent, {
      height: '600px',
      width: '600px'
    });
  }

  updateUser(user: UserModel) {
    const userDialog = this.matDialog.open(UserFormComponent, {
      data: { user },
      height: '600px',
      width: '600px'
    });
  }
}
