import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { UsersComponent } from './list/users/users.component';

const routes: Routes = [
    {
      path: '',
      component: HomeContainerComponent
    },
    {
      path: 'Users',
      component: UsersComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
