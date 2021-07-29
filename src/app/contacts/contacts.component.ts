import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  mouseOnModal: boolean = false;
  formSubmitted: boolean = false;
  modalOpeneded: boolean = false;
  firstBlock: boolean = true;
  secondBlock: boolean = false;
  thirdBlock: boolean = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  handleEvent(check: any) {
    let eventId = check.target.id;
    if (eventId == 'test') {
      this.firstBlock = true;
      this.secondBlock = false;
      this.thirdBlock = false;
    } else if (eventId == 'test1') {
      this.firstBlock = false;
      this.secondBlock = true;
      this.thirdBlock = false;
    } else {
      this.firstBlock = false;
      this.secondBlock = false;
      this.thirdBlock = true;
    }

  }

  submitForm() {
    this.formSubmitted = !this.formSubmitted;
    this.modalOpeneded = !this.modalOpeneded;
    setTimeout(() => {
      this.refreshComponent()
    }, 10000);
  }

  refreshComponent() {
    let currentUrl = this.router.url;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([currentUrl]);
  }

  detectModalMouseLeave() {
    this.mouseOnModal = false;
  }

  detectModalMouseEnter() {
    this.mouseOnModal = true;
  }

  processClickOutside() {
    if (!this.mouseOnModal) {
      this.modalOpeneded = false;
      this.refreshComponent();
    } else {
      return
    }
  }

  showModal() {
    if (this.modalOpeneded) {
      return {
        modal: true,
        'display': 'fixed'}
    } else {
      return {
        modal: false
      }
    }
  }



}
