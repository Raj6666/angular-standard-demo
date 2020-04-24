import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'index', redirectTo: '/index/home', pathMatch: 'full' }, // 根路径默认跳转至首页
  {
    path: '',
    component: IndexComponent, // index
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule', // 欢迎页模块
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
