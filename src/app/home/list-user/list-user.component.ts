import { Component } from '@angular/core';
import { UserDataSharingService } from '../../service/user-data-sharing.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  userList: any[] = [];

  constructor(private userDataSharingService: UserDataSharingService) {}

  ngOnInit(): void {
    // Retrieve the user list from the shared service
    this.userList = this.userDataSharingService.getUserList();
  }
}
