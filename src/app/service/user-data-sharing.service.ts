import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserDataSharingService {
  private addUserForm: FormGroup;
  private userList: any[] = []; // Array to store user data

  constructor(private fb: FormBuilder) {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(3), Validators.maxLength(20)],
      lastName: ['', Validators.required, Validators.minLength(3), Validators.maxLength(20)],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  
  //set the form instance
  setAddUserForm(form: FormGroup): void {
    this.addUserForm = form;
  }

  //get data of added users
  getaddedUserData(): FormGroup {
    return this.addUserForm;
  }

  //add the users to user list array
  addUserToUserList(user: any): void {
    this.userList.push(user);
  }

  //get users list from user list variable
  getUserList(): any[] {
    return this.userList;
  }
}
