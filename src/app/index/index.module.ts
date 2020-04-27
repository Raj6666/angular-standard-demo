/*
 * @Descripttion: 
 * @version: 
 * @Author: Husiyuan
 * @Date: 2020-04-26 10:46:19
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-27 11:25:02
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

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
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), // 欢迎页模块
        data: {
          breadcrumb: '欢迎页'
        },
      },
      {
        path: 'tenant',
        loadChildren: () => import('./pages/tenant/tenant.module').then(m => m.TenantModule), // 租户管理模块
        data: {
          breadcrumb: '租户管理'
        },
      },
      {
        path: 'application',
        loadChildren: () => import('./pages/application/application.module').then(m => m.ApplicationModule), // 应用管理模块
        data: {
          breadcrumb: '应用管理'
        },
      },
      {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),  // 用户管理模块
        data: {
          breadcrumb: '用户管理'
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
  ],
  providers: [BreadcrumbService]
})
export class IndexModule { }
