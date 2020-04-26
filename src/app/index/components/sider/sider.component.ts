/*
 * @Descripttion: 
 * @version: 
 * @Author: Husiyuan
 * @Date: 2020-04-24 11:17:31
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 18:33:45
 */
import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,

  ) { }

  @Input() isCollapsed: boolean;
  currentMenu = 1;

  ngOnInit() {
    this.elementRef.nativeElement.replaceWith(document.getElementById('siderContainer'));
  }
}
