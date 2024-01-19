import { Component } from '@angular/core';
import { UserDataSharingService } from '../../service/user-data-sharing.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {
  userList: any[] = [];

  constructor(private userDataSharingService: UserDataSharingService,
    private router: Router) {}

  ngOnInit(): void {
    // Retrieve the user list from the shared service
    this.userList = this.userDataSharingService.getUserList();
  }
  
  //navigation to users component
  navigate(){ 
    this.router.navigate(['/Users']);
  }
}
