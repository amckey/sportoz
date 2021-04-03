import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  ch: any;
  constructor() {
  }

  ngOnInit(): void {
  }

  showSuccessfulMessage() {
    this.ch = true;
  }

}
