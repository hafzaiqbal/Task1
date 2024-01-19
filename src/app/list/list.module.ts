import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,HomeModule
  ],
  exports: [
    UsersComponent
  ]
})
export class ListModule { }
