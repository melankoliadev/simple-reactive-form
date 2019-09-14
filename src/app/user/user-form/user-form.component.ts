import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  currentOperation = 'Add';
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserFormComponent>,
  ) {}

  ngOnInit() {
    this.initForm();
    if (this.data && this.data.user) {
      this.userForm.patchValue(this.data.user);
      this.currentOperation = 'Edit';
    }
  }
  initForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        suite: [''],
        city: ['', Validators.required],
        zipcode: ['', [Validators.required]],
        geo: this.fb.group({
          lat: [''],
          lng: ['']
        })
      }),
      phone: ['', Validators.required],
      website: [''],
      company: this.fb.group({
        name: [''],
        catchPhrase: [''],
        bs: ['']
      })
    });
  }

  saveUser() {
    console.log(this.userForm.value);
  }
  closeForm() {
    this.dialogRef.close();
  }
}
