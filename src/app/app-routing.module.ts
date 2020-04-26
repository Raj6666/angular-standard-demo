/*
 * @Descripttion: 
 * @version: 
 * @Author: Husiyuan
 * @Date: 2020-04-24 16:10:32
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 15:55:23
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ErrorHandlerComponent } from './errorHandler/errorHandler.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' }, // 根路径默认跳转至首页
  { path: 'index',  loadChildren: './index/index.module#IndexModule'},
  // {
  //   path: 'index',
  //   component: IndexComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: './index/pages/home/home.module#HomeModule', // 欢迎页模块
  //       data: {
  //         breadcrumb: '欢迎页'
  //       }
  //     },
  //     {
  //       path: 'tenant',
  //       loadChildren: './index/pages/tenant/tenant.module#TenantModule', // 租户管理模块
  //       data: {
  //         breadcrumb: '租户管理'
  //       },
  //     },
  //     {
  //       path: 'application',
  //       loadChildren: './index/pages/application/application.module#ApplicationModule', // 应用管理模块
  //       data: {
  //         breadcrumb: '应用管理'
  //       },
  //     }
  //   ]
  // },
  { path: 'error', component: ErrorHandlerComponent }, // error页面
  { path: '**', component: ErrorHandlerComponent } // 404找不到页面跳转error页面
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // preloadingStrategy: PreloadAllModules // 预加载所有懒加载模块
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
