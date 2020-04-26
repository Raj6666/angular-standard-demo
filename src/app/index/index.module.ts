/*
 * @Descripttion: 
 * @version: 
 * @Author: Husiyuan
 * @Date: 2020-04-26 10:46:19
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 15:59:05
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/index/home', pathMatch: 'full' }, // 根路径默认跳转至首页
  {
    path: '',
    component: IndexComponent, // index
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './index/pages/home/home.module#HomeModule', // 欢迎页模块
        data: {
          breadcrumb: '欢迎页'
        },
      },
      {
        path: 'tenant',
        loadChildren: './index/pages/tenant/tenant.module#TenantModule', // 租户管理模块
        data: {
          breadcrumb: '租户管理'
        },
      },
      {
        path: 'application',
        loadChildren: './index/pages/application/application.module#ApplicationModule', // 应用管理模块
        data: {
          breadcrumb: '应用管理'
        },
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexComponent,
    HeaderComponent,
    SiderComponent,
    BreadcrumbComponent
  ]
})
export class IndexModule { }
