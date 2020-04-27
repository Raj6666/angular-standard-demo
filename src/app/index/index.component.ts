/*
 * @Descripttion: 主页模块组件
 * @version: v1.0
 * @Author: Husiyuan
 * @Date: 2020-04-23 19:51:46
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-27 10:46:47
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { CommonService } from 'src/services/common.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbService } from 'src/services/breadcrumb.service';

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.scss'],
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  routerChange: Subscription;
  isCollapsed = false;
  user = 'admin';

  constructor(
    private http: HttpService,
    private common: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.routerChange = this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        const root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbService.sendAction(
          this.breadcrumbService.getBreadcrumbs(root)
        );
      });
  }

  ngOnInit(): void {
    // this.http.get('/test').subscribe((res: any) => {
    //     this.title = res.words;
    // });
  }

  ngOnDestory() {
    this.routerChange.unsubscribe();
  }

  switchCollapse(isCollapsed) {
    this.isCollapsed = !isCollapsed;
  }
}
