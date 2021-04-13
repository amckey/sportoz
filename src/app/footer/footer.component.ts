import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  instagramImage: any = 'docs/assets/instagram.svg'
  facebookImage: any = 'docs/assets/facebook.svg'
  phoneImage: any = 'docs/assets/phone.svg'
  emailImage: any = 'docs/assets/email.svg'

 /*  changeImagesSources() {
    this.instagramImage = './assets/instagram.svg'
    this.facebookImage = './assets/facebook.svg'
    this.phoneImage = './assets/phone.svg'
    this.emailImage = './assets/email.svg'
  } */
}
