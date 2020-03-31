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
  title = 'gempile-modules-report-automation-fe';

  ngOnInit(): void {
    this.http.get('/test').subscribe((res: any) => {
        this.title = res.words;
    });
  }
}
