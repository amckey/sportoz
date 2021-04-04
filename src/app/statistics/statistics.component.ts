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

      (data: any) => this.userList = data.values)

     this.peopleService.getAll().subscribe(
      (data: any) => this.filteredUserList = data.values)
  }

  @ViewChild('mySelect1') mySelect1: any;
  @ViewChild('mySelect2') mySelect2: any;

  rendered: any;
  userList: any;
  filteredUserList: any
  filter1: any;
  filter2: any;

  emitLoader() {
    setTimeout(() => {
      this.userList ? this.rendered = true : this.emitLoader()
    }, 1250);
  }

  filterList() {
    this.filteredUserList = []

    if (!this.mySelect1.empty && this.mySelect2.empty) {
      this.genderFilter()
    } else if (this.mySelect1.empty && !this.mySelect2.empty) {
      this.ageFilter()
    } else if (!this.mySelect1.empty && !this.mySelect2.empty) {
      this.sharedFilter()
    } else {
      this.filteredUserList = this.userList;
    }

  }

  sharedFilter() {
    this.filter1 = this.mySelect1.selected.viewValue;
    this.filter2 = this.mySelect2.selected.value;

    for (let item of this.userList) {

      if (this.filter2 == 2) {
          if (item[4] <= 16 && item[1] === this.filter1) {
            this.filteredUserList.push(item)
          }
        }
      }

      if (this.filter2 == 3) {
        for (let item of this.userList) {
          if (item[4] >= 16 && item[4] <= 25 && item[1] === this.filter1) {
            this.filteredUserList.push(item)
          }
        }
      }

      if (this.filter2 == 4) {
        for (let item of this.userList) {
          if (item[4] >= 25 && item[4] <= 50 && item[1] === this.filter1) {
            this.filteredUserList.push(item)
          }
        }
      }
    }

  genderFilter() {
    this.filter1 = this.mySelect1.selected.viewValue;

    for (let item of this.userList) {
      if (item[1] === this.filter1) {
        this.filteredUserList.push(item)
      }
    }

  }

  ageFilter() {
    this.filter2 = this.mySelect2.selected.value;

    if (this.filter2 == 2) {
      for (let item of this.userList) {
        if (item[4] <= 16) {
          this.filteredUserList.push(item)
        }
      }
    }

    if (this.filter2 == 3) {
      for (let item of this.userList) {
        if (item[4] >= 16 && item[4] <= 25) {
          this.filteredUserList.push(item)
        }
      }
    }

    if (this.filter2 == 4) {
      for (let item of this.userList) {
        if (item[4] >= 25 && item[4] <= 50) {
          this.filteredUserList.push(item)
        }
      }
    }
  }

}


/* if (this.mySelect1.empty) {
  this.filteredUserList = this.userList;
  return
} */
