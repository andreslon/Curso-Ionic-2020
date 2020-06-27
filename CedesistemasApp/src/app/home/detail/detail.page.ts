import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detailSettingsPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event instanceof NavigationEnd && event.url) {
        this.detailSettingsPath = event.url + '/detail-settings';
      }
    });
  }

  ngOnInit() {
  }

}