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

  instagramImage: any = './instagram.svg'
  facebookImage: any = './facebook.svg'
  phoneImage: any = './phone.svg'
  emailImage: any = './email.svg'

 /*  changeImagesSources() {
    this.instagramImage = './assets/instagram.svg'
    this.facebookImage = './assets/facebook.svg'
    this.phoneImage = './assets/phone.svg'
    this.emailImage = './assets/email.svg'
  } */
}
