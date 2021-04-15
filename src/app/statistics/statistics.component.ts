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

      (data: any) => this.originalUserList = data.values)

     this.peopleService.getAll().subscribe(
      (data: any) => this.filteredUserList = data.values)
  }

  @ViewChild('mySelect1') mySelect1: any;
  @ViewChild('mySelect2') mySelect2: any;

  originalUserList: any;
  filteredUserList: any
  genderFilter: any;
  ageFilter: any;
  tableContainsData: boolean = true;

  filterList() {
    this.filteredUserList = []

    if (!this.mySelect1.empty && this.mySelect2.empty) {
      this.setFilterByGender()
    } else if (this.mySelect1.empty && !this.mySelect2.empty) {
      this.setFilterByAge()
    } else if (!this.mySelect1.empty && !this.mySelect2.empty) {
      this.sharedFilter()
    } else {
      this.filteredUserList = this.originalUserList;
    }

    this.checkForMissingData()

  }

  checkForMissingData() {
    (this.filteredUserList.length == 0) ? this.tableContainsData = false : this.tableContainsData = true;
  }

  sharedFilter() {
    this.genderFilter = this.mySelect1.selected.viewValue;
    this.ageFilter = this.mySelect2.selected.value;

    switch (this.ageFilter) {

      case "2":
        for (let item of this.originalUserList) {
          if (item[4] >= 7 && item[4] <= 8 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

      case "3":
        for (let item of this.originalUserList) {
          if (item[4] >= 9 && item[4] <= 10 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

      case "4":
        for (let item of this.originalUserList) {
          if (item[4] >= 11 && item[4] <= 12 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "5":
        for (let item of this.originalUserList) {
          if (item[4] >= 13 && item[4] <= 15 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "6":
        for (let item of this.originalUserList) {
          if (item[4] >= 16 && item[4] <= 18 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "7":
        for (let item of this.originalUserList) {
          if (item[4] >= 18 && item[4] <= 29 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "8":
        for (let item of this.originalUserList) {
          if (item[4] >= 30 && item[4] <= 39 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "9":
        for (let item of this.originalUserList) {
          if (item[4] >= 40 && item[4] <= 49 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "10":
        for (let item of this.originalUserList) {
          if (item[4] >= 50 && item[4] <= 59 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "11":
        for (let item of this.originalUserList) {
          if (item[4] >= 60 && item[4] <= 69 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "12":
        for (let item of this.originalUserList) {
          if (item[4] >= 70 && item[1] === this.genderFilter) {
            this.filteredUserList.push(item)
          }
        }
        break;
    }

    }

  setFilterByGender() {
    this.genderFilter = this.mySelect1.selected.viewValue;

    for (let item of this.originalUserList) {
      if (item[1] === this.genderFilter) {
        this.filteredUserList.push(item)
      }
    }
  }

  setFilterByAge() {
    this.ageFilter = this.mySelect2.selected.value;

    switch (this.ageFilter) {

      case "2":
        for (let item of this.originalUserList) {
          if (item[4] >= 7 && item[4] <= 8) {
            this.filteredUserList.push(item)
          }
        }
        break;

      case "3":
        for (let item of this.originalUserList) {
          if (item[4] >= 9 && item[4] <= 10) {
            this.filteredUserList.push(item)
          }
        }
        break;

      case "4":
        for (let item of this.originalUserList) {
          if (item[4] >= 11 && item[4] <= 12) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "5":
        for (let item of this.originalUserList) {
          if (item[4] >= 13 && item[4] <= 15) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "6":
        for (let item of this.originalUserList) {
          if (item[4] >= 16 && item[4] <= 18) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "7":
        for (let item of this.originalUserList) {
          if (item[4] >= 18 && item[4] <= 29) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "8":
        for (let item of this.originalUserList) {
          if (item[4] >= 30 && item[4] <= 39) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "9":
        for (let item of this.originalUserList) {
          if (item[4] >= 40 && item[4] <= 49) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "10":
        for (let item of this.originalUserList) {
          if (item[4] >= 50 && item[4] <= 59) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "11":
        for (let item of this.originalUserList) {
          if (item[4] >= 60 && item[4] <= 69) {
            this.filteredUserList.push(item)
          }
        }
        break;

        case "12":
        for (let item of this.originalUserList) {
          if (item[4] >= 70) {
            this.filteredUserList.push(item)
          }
        }
        break;
    }

  }
}
