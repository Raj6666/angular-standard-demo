/*
 * @Descripttion: 主页模块组件
 * @version: v1.0
 * @Author: Husiyuan
 * @Date: 2020-04-23 19:51:46
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 18:50:36
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { CommonService } from 'src/services/common.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.scss'],
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  rooterChange: Subscription;
  isCollapsed = false;
  user = 'admin';

  constructor(
    private http: HttpService,
    private common: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.rooterChange = this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        const root: ActivatedRoute = this.activatedRoute.root;
        console.log(this.activatedRoute);
      });
  }

  ngOnInit(): void {
    // this.http.get('/test').subscribe((res: any) => {
    //     this.title = res.words;
    // });
  }

  switchCollapse(isCollapsed) {
    this.isCollapsed = !isCollapsed;
  }
}
