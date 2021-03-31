import { Component, OnInit } from '@angular/core';
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

   userList: any;

}
