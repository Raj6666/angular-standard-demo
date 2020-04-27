/*
 * @Descripttion: 
 * @version: 
 * @Author: Husiyuan
 * @Date: 2020-04-26 18:39:21
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 18:50:57
 */
import { Component, OnInit, ElementRef } from '@angular/core';
import { BreadcrumbService } from 'src/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Array<object>;

  constructor(
    private elementRef: ElementRef,
    private breadcrumbService: BreadcrumbService
  ) {
    // 启动对路由服务的监听
    this.breadcrumbService.urlSubscription = this.breadcrumbService.urlSubject.subscribe(action => {
      this.breadcrumbs = action;
    });
   }

  ngOnInit() {
    this.elementRef.nativeElement.replaceWith(document.getElementById('breadcrumbContainer'));
  }

  ngOnDestory() {
    // 组件销毁同时取消监听
    this.breadcrumbService.urlSubject.unsubscribe();
  }

}
