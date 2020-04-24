/*
 * @Descripttion: 主页模块组件
 * @version: v1.0
 * @Author: Husiyuan
 * @Date: 2020-04-23 19:51:46
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-24 10:54:05
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.scss'],
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  constructor(
    private http: HttpService,
    private common: CommonService
  ) {}

  isCollapsed = false;
  user = 'admin';

  ngOnInit(): void {
    // this.http.get('/test').subscribe((res: any) => {
    //     this.title = res.words;
    // });
  }

  switchCollapse(isCollapsed) {
    this.isCollapsed = !isCollapsed;
  }
}
