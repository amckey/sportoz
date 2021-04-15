import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../../people.service';
import { CountdownComponent } from 'ngx-countdown';



@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(private peopleService: PeopleService) {
  }

  @ViewChild('cd') counter: any;

  ngOnInit(): void {
    this.peopleService.getDate().subscribe(

      (data: any) => this.nextSessionDate = data.values[0][0])

      this.peopleService.getDate().subscribe(

      (data: any) => this.nextSessionDay = data.values[1][0])

      this.counter.restart()
  }

  nextSessionDate: any;
  nextSessionDay: any;
  timeLeftMs: any;

  calculateLeftTime() {
    let currentDate: any = Date.now()
    let nextDateMs = Date.parse(this.nextSessionDate)
    this.timeLeftMs = Math.round((nextDateMs - currentDate)*0.001 - 10800)
  }

}
