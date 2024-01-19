import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, MaxValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserDataSharingService } from '../../service/user-data-sharing.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  addUserForm: FormGroup;
  showSuccessMsg: boolean = false;
  constructor(private fb: FormBuilder,
    private userDataSharingService: UserDataSharingService) {
    this.addUserForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });

    // Share the form data with the service
    this.userDataSharingService.setAddUserForm(this.addUserForm);
  }
  ngOnInit(): void {
    this.addUserForm = this.createForm();
  }
  createForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
 
  // //function to check if the form values are invalid
  isInValid(control: string): boolean {
    const formControl = this.addUserForm.get(control);
    if (formControl && formControl.invalid && formControl.touched) {
      return true;
    }
    return false;
  }

  onSubmit() {
    //Handle form submission
    if (this.addUserForm.valid) {
      // Get the user data from the form
      const userData = this.addUserForm.value;

      // Add the user to the user list in the shared service
      this.userDataSharingService.addUserToUserList(userData);

      //show success msg 
      setTimeout(() => {
        this.showSuccessMsg = true;
      }, 100);
      // Reset the form for the next user
      this.addUserForm.reset();
    }
    else {
      this.showSuccessMsg = false;
    }
  }
}
