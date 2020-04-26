/*
 * @Descripttion: 
 * @version: 
 * @Author: Husiyuan
 * @Date: 2020-04-26 18:39:21
 * @LastEditors: Husiyuan
 * @LastEditTime: 2020-04-26 18:50:57
 */
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(
    private elementRef: ElementRef

  ) { }

  ngOnInit() {
    this.elementRef.nativeElement.replaceWith(document.getElementById('breadcrumbContainer'));
  }

}
