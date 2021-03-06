import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  copyrightText = '';

  ngOnInit(): void {
    this.copyrightText = 'Copyright © VK Apps ' + new Date().getFullYear();
  }
}
