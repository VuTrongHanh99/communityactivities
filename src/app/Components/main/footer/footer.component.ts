import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  version: any;
  versionDetail: any;
  constructor(
    private http: HttpClient
  ) { }


  ngOnInit() {
    // this.webSocketService.listen('updateVersionListen').subscribe((data) => {
    //   alert("Phiên bản của bạn đã cũ trình duyệt sẽ tự động tải lại!");
    //   window.location.reload();
    // })
    // this.http.get<any>('assets/version.json').subscribe(data => {
    //   this.version = data.version
    //   if (this.version != localStorage.getItem("Version") || localStorage.getItem("Version") == undefined) {
     
    //     alert("Phiên bản của bạn đã cũ trình duyệt sẽ tự động tải lại!");
    //     window.location.reload();
    //     localStorage.setItem("Version", data.version);
    //   }
    // })
  }

}
