// tslint:disable: no-string-literal
/*
 * @Descripttion: 
 * @version: 
 * @Author: Husiyuan
 * @Date: 2020-04-24 11:17:31
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 18:33:45
 */
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { BreadcrumbService } from 'src/services/breadcrumb.service';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

  currentLabel: string;

  constructor(
    private elementRef: ElementRef,
    private breadcrumbService: BreadcrumbService
  ) {
    // 启动对路由服务的监听
    this.breadcrumbService.urlSubscription = this.breadcrumbService.urlSubject.subscribe(action => {
      // 检查最末尾的一层路由
      this.currentLabel = action[action.length - 1]['label'];
    });
  }

  @Input() isCollapsed: boolean;
  currentMenu = 1;

  ngOnInit() {
    this.elementRef.nativeElement.replaceWith(document.getElementById('siderContainer'));
  }

  ngOnDestory() {
    // 组件销毁同时取消监听
    this.breadcrumbService.urlSubject.unsubscribe();
  }
}
