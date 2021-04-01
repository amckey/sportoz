import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../people.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getAll().subscribe(
      (data: any) => this.userList = data
    )
  }

  @ViewChild('mySelect') mySelect: any;

  userList: any;

  testingThat() {
   if(!this.mySelect.selected.viewValue) {
     console.log('yo')
   } else {
     console.log(this.mySelect.selected.viewValue)
   }
    }


}
