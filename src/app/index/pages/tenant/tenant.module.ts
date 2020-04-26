/*
 * @Descripttion: 
 * @version: 
 * @Author: Husiyuan
 * @Date: 2020-04-26 12:05:39
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 13:04:06
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantComponent } from './tenant.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TenantComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TenantComponent]
})
export class TenantModule { }
