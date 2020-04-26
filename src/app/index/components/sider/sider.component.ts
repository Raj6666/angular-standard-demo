/*
 * @Descripttion: 
 * @version: 
 * @Author: Husiyuan
 * @Date: 2020-04-24 11:17:31
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 17:33:27
 */
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET, Router, NavigationEnd } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreadcrumbOption } from 'ng-zorro-antd';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

  rooterChange: Subscription;

  constructor(
    private elementRef: ElementRef,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  @Input() isCollapsed: boolean;
  currentMenu = 1;

  ngOnInit() {
    this.elementRef.nativeElement.replaceWith(document.getElementById('siderContainer'));

    this.rooterChange = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        console.log(this.router);
        console.log(this.activeRoute);
      }
    });

  }
}
