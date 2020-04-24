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
