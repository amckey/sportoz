import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  formSubmitted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showConfirmationMessage() {
    this.formSubmitted = true;
  }

}
