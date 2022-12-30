import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { common } from 'src/app/app.common';
import { Account } from 'src/app/Utils/services/Account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public sidebarMenuOpened = true;
  @ViewChild('contentWrapper', { static: false }) contentWrapper: any;

  constructor(private renderer: Renderer2,
    private accountService: Account,
    public router: Router,
    private spinner: NgxSpinnerService) {}
  public com!: common;
  ngOnInit() {
    this.com = new common(this.router);
    this.com.CheckLogin();
    
  }
  toggleMenuSidebar() {
    if (this.sidebarMenuOpened) {
      this.renderer.removeClass(document.body, 'sidebar-open');
      this.renderer.addClass(document.body, 'sidebar-collapse');
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(document.body, 'sidebar-collapse');
      this.renderer.addClass(document.body, 'sidebar-open');
      this.sidebarMenuOpened = true;
    }
  }
}

