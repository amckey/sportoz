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

  instagramImage: any = './assets/instagram.svg'
  facebookImage: any = './assets/facebook.svg'
  phoneImage: any = '../assets/phone.svg'
  emailImage: any = '../assets/email.svg'

 /*  changeImagesSources() {
    this.instagramImage = './assets/instagram.svg'
    this.facebookImage = './assets/facebook.svg'
    this.phoneImage = './assets/phone.svg'
    this.emailImage = './assets/email.svg'
  } */
}
