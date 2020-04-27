import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigUserComponent } from './bigUser/bigUser.component';
import { SmallUserComponent } from './smallUser/smallUser.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'small',
  },
  {
    path: 'small',
    component: SmallUserComponent,
    data: {
      breadcrumb: '小用户管理'
    },
  },
  {
    path: 'big',
    component: BigUserComponent,
    data: {
      breadcrumb: '大用户管理'
    },
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BigUserComponent,
    SmallUserComponent]
})
export class UserModule { }
