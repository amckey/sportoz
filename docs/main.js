(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zaharova/Desktop/sportoz/src/main.ts */"zUnb");


/***/ }),

/***/ "4QAB":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../people.service */ "gKce");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["mySelect1"];
const _c1 = ["mySelect2"];
function StatisticsComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r4[2], " ", item_r4[3], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4[6]);
} }
function StatisticsComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StatisticsComponent {
    constructor(peopleService) {
        this.peopleService = peopleService;
        this.tableContainsData = true;
    }
    ngOnInit() {
        this.peopleService.getAll().subscribe((data) => this.originalUserList = data.values);
        this.peopleService.getAll().subscribe((data) => this.filteredUserList = data.values);
    }
    filterList() {
        this.filteredUserList = [];
        if (!this.mySelect1.empty && this.mySelect2.empty) {
            this.setFilterByGender();
        }
        else if (this.mySelect1.empty && !this.mySelect2.empty) {
            this.setFilterByAge();
        }
        else if (!this.mySelect1.empty && !this.mySelect2.empty) {
            this.sharedFilter();
        }
        else {
            this.filteredUserList = this.originalUserList;
        }
        this.checkForMissingData();
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
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "3":
                for (let item of this.originalUserList) {
                    if (item[4] >= 9 && item[4] <= 10 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "4":
                for (let item of this.originalUserList) {
                    if (item[4] >= 11 && item[4] <= 12 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "5":
                for (let item of this.originalUserList) {
                    if (item[4] >= 13 && item[4] <= 15 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "6":
                for (let item of this.originalUserList) {
                    if (item[4] >= 16 && item[4] <= 18 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "7":
                for (let item of this.originalUserList) {
                    if (item[4] >= 18 && item[4] <= 29 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "8":
                for (let item of this.originalUserList) {
                    if (item[4] >= 30 && item[4] <= 39 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "9":
                for (let item of this.originalUserList) {
                    if (item[4] >= 40 && item[4] <= 49 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "10":
                for (let item of this.originalUserList) {
                    if (item[4] >= 50 && item[4] <= 59 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "11":
                for (let item of this.originalUserList) {
                    if (item[4] >= 60 && item[4] <= 69 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "12":
                for (let item of this.originalUserList) {
                    if (item[4] >= 70 && item[1] === this.genderFilter) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
        }
    }
    setFilterByGender() {
        this.genderFilter = this.mySelect1.selected.viewValue;
        for (let item of this.originalUserList) {
            if (item[1] === this.genderFilter) {
                this.filteredUserList.push(item);
            }
        }
    }
    setFilterByAge() {
        this.ageFilter = this.mySelect2.selected.value;
        switch (this.ageFilter) {
            case "2":
                for (let item of this.originalUserList) {
                    if (item[4] >= 7 && item[4] <= 8) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "3":
                for (let item of this.originalUserList) {
                    if (item[4] >= 9 && item[4] <= 10) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "4":
                for (let item of this.originalUserList) {
                    if (item[4] >= 11 && item[4] <= 12) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "5":
                for (let item of this.originalUserList) {
                    if (item[4] >= 13 && item[4] <= 15) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "6":
                for (let item of this.originalUserList) {
                    if (item[4] >= 16 && item[4] <= 18) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "7":
                for (let item of this.originalUserList) {
                    if (item[4] >= 18 && item[4] <= 29) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "8":
                for (let item of this.originalUserList) {
                    if (item[4] >= 30 && item[4] <= 39) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "9":
                for (let item of this.originalUserList) {
                    if (item[4] >= 40 && item[4] <= 49) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "10":
                for (let item of this.originalUserList) {
                    if (item[4] >= 50 && item[4] <= 59) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "11":
                for (let item of this.originalUserList) {
                    if (item[4] >= 60 && item[4] <= 69) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
            case "12":
                for (let item of this.originalUserList) {
                    if (item[4] >= 70) {
                        this.filteredUserList.push(item);
                    }
                }
                break;
        }
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"])); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-statistics"]], viewQuery: function StatisticsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySelect1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mySelect2 = _t.first);
    } }, decls: 76, vars: 3, consts: [[1, "container"], [1, "container-intro"], [1, "container-intro-title"], [1, "container-intro-subtitle"], [1, "container-filters"], [1, "filter"], ["appearance", "fill"], ["disableRipple", "", 3, "selectionChange"], ["mySelect1", ""], ["value", "2"], ["value", "3"], ["mySelect2", ""], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], [1, "centered"], [1, "container-table"], [4, "ngFor", "ngForOf"], ["class", "container-table-no-data", 4, "ngIf"], ["listen", ""], [1, "container-table-no-data"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u0440\u043E\u0439\u0434\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0442\u044B \u043F\u043E\u043F\u0430\u0434\u0451\u0448\u044C \u0432 \u044D\u0442\u0443 \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0437\u043E\u043B\u043E\u0442\u043E\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0431\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0431\u0435\u0437 \u043E\u0446\u0435\u043D\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "). \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0439 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0439\u0441\u044F \u043D\u0430 \u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E\u043C!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u041D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0439, \u0447\u0442\u043E \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441 \u043A\u0430\u0436\u0434\u044B\u043C \u043D\u043E\u0432\u044B\u043C \u044D\u0442\u0430\u043F\u043E\u043C \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041F\u043E\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function StatisticsComponent_Template_mat_select_selectionChange_26_listener() { return ctx.filterList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041C\u0443\u0436\u0441\u043A\u043E\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0416\u0435\u043D\u0441\u043A\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 7, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function StatisticsComponent_Template_mat_select_selectionChange_37_listener() { return ctx.filterList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "7-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "9-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "11-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "13-15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "16-18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "18-29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "30-39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "40-49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "50-59");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "60-69");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, StatisticsComponent_tr_74_Template, 10, 5, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, StatisticsComponent_div_75_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](">70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredUserList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tableContainsData);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  font-size: 0.9em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  table-layout: fixed;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even) {\n  background-color: #f5f5f5;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #135aac1e;\n}\n\nth[_ngcontent-%COMP%] {\n  height: 40px;\n  background-color:#135aacd3;\n  text-align: left;\n  padding: 12px 15px;\n  color: white;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  border-bottom: 1px solid darkgray;\n  height: 30px;\n  padding: 12px 15px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 120px;\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  width: 75%;\n  text-align: center;\n  margin: 20px auto;\n  border-bottom: 2px solid #135aac;\n}\n\ngit\n\n.container-intro-title[_ngcontent-%COMP%] {\n  font-size: 25pt;\n  color: rgb(49, 49, 49);\n  margin: 20px auto;\n  line-height: 1.4em;\n}\n\n.container-intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  color: rgb(99, 99, 99);\n  padding-bottom: 10px;\n  letter-spacing: 1px;\n}\n\n.container-filters[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.container-table[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 !important;\n  width: 65%;\n}\n\n.container-table-no-data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.filter[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n@media (max-width: 600px) {\n  .container-filters[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n\n  table[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n\n  .container-table[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFBQzs7O0VBR0MsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG50YWJsZSB0cjpudGgtb2YtdHlwZShldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbnRhYmxlIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNWFhYzFlO1xufVxuXG50aCB7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojMTM1YWFjZDM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtncmF5O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG59XG5cbi5jb250YWluZXItaW50cm8ge1xuICB3aWR0aDogNzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzEzNWFhYztcbn1naXRcblxuLmNvbnRhaW5lci1pbnRyby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjVwdDtcbiAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbn1cblxuLmNvbnRhaW5lci1pbnRyby1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jb250YWluZXItZmlsdGVycyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNlbnRlcmVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLXRhYmxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2NSU7XG59XG5cbi5jb250YWluZXItdGFibGUtbm8tZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZmlsdGVyIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lci1maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgfVxuXG4gIC5jb250YWluZXItdGFibGUge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CtkY":
/*!*********************************************************!*\
  !*** ./src/app/homepage/partners/partners.component.ts ***!
  \*********************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PartnersComponent {
    constructor() { }
    ngOnInit() {
    }
}
PartnersComponent.ɵfac = function PartnersComponent_Factory(t) { return new (t || PartnersComponent)(); };
PartnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartnersComponent, selectors: [["app-partners"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "container-title"], [1, "container-inner"], [1, "container-inner-block"]], template: function PartnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041D\u0430\u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgb(49, 49, 49);\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.container-title[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  width: 100%;\n  font-size: 25pt;\n  line-height: 1.4em;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.container-subtitle[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  color: rgb(99, 99, 99);\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.container-inner-block[_ngcontent-%COMP%] {\n  margin: 40px;\n  height: 100px;\n  width: 250px;\n  background-color: whitesmoke;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12pt;\n}\n\n.container-inner-block[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n@media (max-width: 450px) {\n  .container-inner[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRuZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InBhcnRuZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29udGFpbmVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI1cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW5uZXItYmxvY2sge1xuICBtYXJnaW46IDQwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJsb2NrOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY29udGFpbmVyLWlubmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "DbuB":
/*!***********************************************************!*\
  !*** ./src/app/homepage/trainings/trainings.component.ts ***!
  \***********************************************************/
/*! exports provided: TrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsComponent", function() { return TrainingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class TrainingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TrainingsComponent.ɵfac = function TrainingsComponent_Factory(t) { return new (t || TrainingsComponent)(); };
TrainingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainingsComponent, selectors: [["app-trainings"]], decls: 75, vars: 0, consts: [[1, "container"], [1, "container-title"], [1, "container-subtitle"], [1, "container-inner"], [1, "container-inner-block"], [1, "container-inner-block-day"], [1, "block-image"], ["src", "./assets/day.svg"], [1, "container-inner-block-time"], ["src", "./assets/schedule.svg"], [1, "container-inner-block-place"], ["src", "./assets/location.svg"], [1, "container-button"], ["id", "button", "routerLink", "contacts", 1, "component-button"]], template: function TrainingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C, \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043C\u043E\u0436\u043D\u043E, \u0441\u0432\u044F\u0437\u0430\u0432\u0448\u0438\u0441\u044C \u0441 \u043D\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0414\u0435\u043D\u044C \u043D\u0435\u0434\u0435\u043B\u0438: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0412\u0442\u043E\u0440\u043D\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0412\u0440\u0435\u043C\u044F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "19:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041C\u0435\u0441\u0442\u043E: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0417\u043E\u043B\u0438\u0442\u0443\u0434\u0435, \u0443\u043B. \u0410\u043A\u0430\u0434\u0435\u043C\u0438\u043A\u0430 \u041F\u0430\u0443\u043B\u0430 \u041B\u0435\u0439\u0438\u043D\u044F 20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0414\u0435\u043D\u044C \u043D\u0435\u0434\u0435\u043B\u0438: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0427\u0435\u0442\u0432\u0435\u0440\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0412\u0440\u0435\u043C\u044F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "19:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u041C\u0435\u0441\u0442\u043E: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0417\u043E\u043B\u0438\u0442\u0443\u0434\u0435, \u0443\u043B. \u0410\u043A\u0430\u0434\u0435\u043C\u0438\u043A\u0430 \u041F\u0430\u0443\u043B\u0430 \u041B\u0435\u0439\u0438\u043D\u044F 20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0414\u0435\u043D\u044C \u043D\u0435\u0434\u0435\u043B\u0438: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0421\u0443\u0431\u0431\u043E\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0412\u0440\u0435\u043C\u044F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "10:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u041C\u0435\u0441\u0442\u043E: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0417\u043E\u043B\u0438\u0442\u0443\u0434\u0435, \u0443\u043B. \u0410\u043A\u0430\u0434\u0435\u043C\u0438\u043A\u0430 \u041F\u0430\u0443\u043B\u0430 \u041B\u0435\u0439\u0438\u043D\u044F 20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgb(49, 49, 49);\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.container-title[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  width: 100%;\n  font-size: 25pt;\n  line-height: 1.4em;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.container-subtitle[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  color: rgb(99, 99, 99);\n  letter-spacing: 1px;\n  text-align: center;\n  margin: 0 30px;\n}\n\n.container-inner-block[_ngcontent-%COMP%] {\n  margin: 40px;\n  width: 25%;\n  height: 150px;\n  background-color: whitesmoke;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12pt;\n}\n\n.container-inner-block-day[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n  display: inherit;\n  align-items: center;\n  text-align: left;\n}\n\n.container-inner-block-time[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n  display: inherit;\n  align-items: center;\n  text-align: left;\n}\n\n.container-inner-block-place[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n  display: inherit;\n  align-items: center;\n  text-align: left;\n}\n\n.block-image[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  align-items: center;\n  display: flex;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  font-size: 13pt;\n  opacity: 0.9;\n  width: 220px !important;\n  font-size: 11pt;\n}\n\n.container-button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.component-button[_ngcontent-%COMP%]:active {\n  background-color: white;\n}\n\n@media (max-width: 1300px) {\n  .container-inner-block[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n}\n\n@media (max-width: 965px) {\n  .container-inner-block[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media (max-width: 550px) {\n  .container-inner[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 0;\n  }\n\n  .container-inner-block[_ngcontent-%COMP%] {\n    height: 270px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoidHJhaW5pbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29udGFpbmVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI1cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAzMHB4O1xufVxuXG4uY29udGFpbmVyLWlubmVyLWJsb2NrIHtcbiAgbWFyZ2luOiA0MHB4O1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmb250LXNpemU6IDEycHQ7XG59XG5cbi5jb250YWluZXItaW5uZXItYmxvY2stZGF5IHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ibG9jay10aW1lIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ibG9jay1wbGFjZSB7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ibG9jay1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgd2lkdGg6IDIyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbn1cblxuLmNvbnRhaW5lci1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb21wb25lbnQtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5jb250YWluZXItaW5uZXItYmxvY2sge1xuICAgIGhlaWdodDogMjIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk2NXB4KSB7XG4gIC5jb250YWluZXItaW5uZXItYmxvY2sge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5jb250YWluZXItaW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuY29udGFpbmVyLWlubmVyLWJsb2NrIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introduction/introduction.component */ "PmAN");
/* harmony import */ var _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainings/trainings.component */ "DbuB");



class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 2, vars: 0, template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-trainings");
    } }, directives: [_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__["IntroductionComponent"], _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_2__["TrainingsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "PmAN":
/*!*****************************************************************!*\
  !*** ./src/app/homepage/introduction/introduction.component.ts ***!
  \*****************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../people.service */ "gKce");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-countdown */ "z+xu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = ["cd"];
const _c1 = function (a0) { return { leftTime: a0, format: "d" }; };
const _c2 = function (a0) { return { leftTime: a0, format: "HH" }; };
const _c3 = function (a0) { return { leftTime: a0, format: "m" }; };
const _c4 = function (a0) { return { leftTime: a0, format: "s" }; };
class IntroductionComponent {
    constructor(peopleService) {
        this.peopleService = peopleService;
    }
    ngOnInit() {
        this.peopleService.getDate().subscribe((data) => this.nextSessionDate = data.values[0][0]);
        this.peopleService.getDate().subscribe((data) => this.nextSessionDay = data.values[1][0]);
        this.counter.restart();
    }
    calculateLeftTime() {
        let currentDate = Date.now();
        let nextDateMs = Date.parse(this.nextSessionDate);
        this.timeLeftMs = Math.round((nextDateMs - currentDate) * 0.001 - 10800);
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"])); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], viewQuery: function IntroductionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.counter = _t.first);
    } }, decls: 65, vars: 14, consts: [[1, "container"], [1, "container-title"], [1, "container-subtitle"], [1, "container-inner"], [1, "container-inner-block"], [1, "container-inner-block-image"], ["src", "./assets/fitness.svg"], [1, "container-inner-block-title"], [1, "container-inner-block-text"], ["src", "./assets/age.svg"], ["src", "./assets/certificate.svg"], ["src", "./assets/cup.svg"], [1, "container-inner2"], [1, "container-title2"], [1, "container-subtitle2"], [3, "config"], ["cd", ""], [1, "container-button"], ["id", "button", "routerLink", "contacts", 1, "component-button"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u0449\u0435\u0439 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043F\u043E \u0432\u0441\u0435\u0439 \u041B\u0430\u0442\u0432\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C - \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043C\u0438\u0440 \u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0435 \u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u0435\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0422\u0435\u0441\u0442\u044B \u043E\u0431\u0449\u0435\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0443\u0440\u043E\u0432\u043D\u044F \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 (\u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u0430)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\"\u041D\u0435\u0442\" \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F\u043C \u043F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u044B \u043C\u043E\u0433\u0443\u0442 \u0441\u0434\u0430\u0432\u0430\u0442\u044C \u043B\u044E\u0434\u0438 \u043B\u044E\u0431\u043E\u0433\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0441\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041F\u0430\u043C\u044F\u0442\u043D\u044B\u0439 \u0434\u0438\u043F\u043B\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041A\u0430\u0436\u0434\u043E\u043C\u0443 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0443 \u0432\u0440\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u0430\u043C\u044F\u0442\u043D\u044B\u0439 \u0434\u0438\u043F\u043B\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0430\u0435\u0442\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438, \u0447\u0435\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u0440\u043E\u043D\u0437\u043E\u0432\u043E\u043C\u0443, \u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u043E\u043C\u0443 \u0438 \u0437\u043E\u043B\u043E\u0442\u043E\u043C\u0443 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044F\u043C, \u0431\u0443\u0434\u0443\u0442 \u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u044B \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0430\u043C\u044F\u0442\u043D\u044B\u043C \u0434\u0438\u043F\u043B\u043E\u043C\u043E\u043C, \u043D\u043E \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u043D\u0430\u0447\u043A\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0434\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u0432\u0430\u043C, \u0435\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443 \u0438\u043B\u0438 \u0437\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0414\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "countdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u0434\u043D\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "countdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u0447\u0430\u0441\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "countdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u043C\u0438\u043D\u0443\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "countdown", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u0441\u0435\u043A\u0443\u043D\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u041F\u0440\u043E\u0439\u0442\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calculateLeftTime(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nextSessionDay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.timeLeftMs));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx.timeLeftMs));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, ctx.timeLeftMs));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c4, ctx.timeLeftMs));
    } }, directives: [ngx_countdown__WEBPACK_IMPORTED_MODULE_2__["CountdownComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 130px;\n  width: 100%;\n  min-height: 80vh;\n  color: rgb(49, 49, 49);\n}\n\n.container[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    width: 80%;\n    left: 10%;\n    border-top: 2px solid #135aac;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 40px;\n}\n\n.container-inner2[_ngcontent-%COMP%] {\n  max-width: 80%;\n  display: block;\n  margin: 0 auto;\n}\n\n.container-title[_ngcontent-%COMP%] {\n  width: 80%;\n  font-size: 25pt;\n  line-height: 1.4em;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.container-title2[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.container-subtitle[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  color: rgb(99, 99, 99);\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.container-subtitle2[_ngcontent-%COMP%] {\n  font-size: 12pt;\n  color: rgb(99, 99, 99);\n  letter-spacing: 1px;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  margin: 35px 0 50px 0;\n  font-size: 13pt;\n  opacity: 0.9;\n  width: 200px !important;\n  font-size: 11pt;\n}\n\n.component-button[_ngcontent-%COMP%]:active {\n  background-color: white;\n}\n\n.container-inner-block[_ngcontent-%COMP%] {\n  width: 35%;\n  display: block;\n  height: 270px;\n  margin: 40px;\n  background-color: rgb(247, 247, 247);\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n}\n\n.container-inner-block-image[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n\n.container-inner-block-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.container-inner-block-title[_ngcontent-%COMP%] {\n  margin: 30px 0 15px 30px;\n  font-size: 15pt;\n  font-weight: bold;\n}\n\n.container-inner-block-text[_ngcontent-%COMP%] {\n  margin: 0 30px;\n  font-size: 12pt;\n  color: rgb(99, 99, 99)\n}\n\n.container-button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media (max-width: 1100px) {\n  .container-inner-block[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n\n  .container-inner-block-title[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n\n@media (max-width: 900px) {\n  .container-inner-block[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n\n@media (max-width: 800px) {\n  .container-inner-block[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n\n  .container-inner-block-title[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}\n\n@media (max-width: 680px) {\n  .container-inner-block[_ngcontent-%COMP%] {\n    height: 480px;\n  }\n\n  .container-inner-block-title[_ngcontent-%COMP%] {\n    max-width: 170px;\n  }\n}\n\n@media (max-width: 535px) {\n  .container-inner-block[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n\n  .container-inner-block[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 300px;\n  }\n\n  .container-inner-block-title[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n\n  .container-subtitle[_ngcontent-%COMP%] {\n    margin: 0 30px;\n    margin-bottom: 30px;\n  }\n\n  .container-title2[_ngcontent-%COMP%] {\n    margin: 30px 0;\n  }\n\n  .container-subtitle2[_ngcontent-%COMP%] {\n    margin: 30px 30px 0 30px\n  }\n\n}\n\n@media (max-width: 400px) {\n  .container-inner[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .container-inner-block[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULDZCQUE2QjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtFQUNGOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcbn1cblxuLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDogMTAlO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTM1YWFjO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNvbnRhaW5lci1pbm5lcjIge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyLXRpdGxlIHtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAyNXB0O1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItdGl0bGUyIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jb250YWluZXItc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1zdWJ0aXRsZTIge1xuICBmb250LXNpemU6IDEycHQ7XG4gIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBtYXJnaW46IDM1cHggMCA1MHB4IDA7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgb3BhY2l0eTogMC45O1xuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB0O1xufVxuXG4uY29tcG9uZW50LWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ibG9jayB7XG4gIHdpZHRoOiAzNSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDI3MHB4O1xuICBtYXJnaW46IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5jb250YWluZXItaW5uZXItYmxvY2staW1hZ2Uge1xuICBtYXJnaW46IDMwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXItYmxvY2staW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ibG9jay10aXRsZSB7XG4gIG1hcmdpbjogMzBweCAwIDE1cHggMzBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhaW5lci1pbm5lci1ibG9jay10ZXh0IHtcbiAgbWFyZ2luOiAwIDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgY29sb3I6IHJnYig5OSwgOTksIDk5KVxufVxuXG4uY29udGFpbmVyLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuY29udGFpbmVyLWlubmVyLWJsb2NrIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lci1pbm5lci1ibG9jay10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRhaW5lci1pbm5lci1ibG9jayB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lci1pbm5lci1ibG9jayB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuXG4gIC5jb250YWluZXItaW5uZXItYmxvY2stdGl0bGUge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XG4gIC5jb250YWluZXItaW5uZXItYmxvY2sge1xuICAgIGhlaWdodDogNDgwcHg7XG4gIH1cblxuICAuY29udGFpbmVyLWlubmVyLWJsb2NrLXRpdGxlIHtcbiAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MzVweCkge1xuICAuY29udGFpbmVyLWlubmVyLWJsb2NrIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cblxuICAuY29udGFpbmVyLWlubmVyLWJsb2NrIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cblxuICAuY29udGFpbmVyLWlubmVyLWJsb2NrLXRpdGxlIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lci1zdWJ0aXRsZSB7XG4gICAgbWFyZ2luOiAwIDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC5jb250YWluZXItdGl0bGUyIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgfVxuXG4gIC5jb250YWluZXItc3VidGl0bGUyIHtcbiAgICBtYXJnaW46IDMwcHggMzBweCAwIDMwcHhcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuY29udGFpbmVyLWlubmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5jb250YWluZXItaW5uZXItYmxvY2sge1xuICAgIGhlaWdodDogMzUwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'VFS';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "page"], [1, "header"], [1, "container"], [1, "whitespace"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 2;\n}\n\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  z-index: 1;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: auto\n}\n\n.whitespace[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLnBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogYXV0b1xufVxuXG4ud2hpdGVzcGFjZSB7XG4gIG1hcmdpbjogMzBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistics/statistics.component */ "4QAB");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contacts.component */ "iZNs");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _homepage_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./homepage/introduction/introduction.component */ "PmAN");
/* harmony import */ var _homepage_partners_partners_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/partners/partners.component */ "CtkY");
/* harmony import */ var _homepage_trainings_trainings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./homepage/trainings/trainings.component */ "DbuB");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-countdown */ "z+xu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            ngx_countdown__WEBPACK_IMPORTED_MODULE_21__["CountdownModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"] },
                { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"] },
                { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"] },
                { path: '**', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"] },
            ], { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top' }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
        _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"],
        _homepage_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_14__["IntroductionComponent"],
        _homepage_partners_partners_component__WEBPACK_IMPORTED_MODULE_15__["PartnersComponent"],
        _homepage_trainings_trainings_component__WEBPACK_IMPORTED_MODULE_16__["TrainingsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        ngx_countdown__WEBPACK_IMPORTED_MODULE_21__["CountdownModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u0440\u043E\u0439\u0442\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.sideMenuIsOpened = false;
    }
    ngOnInit() {
    }
    toggleSideMenu() {
        this.sideMenuIsOpened = !this.sideMenuIsOpened;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 1, consts: [[1, "header"], [1, "logo"], ["routerLink", "", 3, "click"], [1, "nav"], ["routerLink", ""], ["routerLink", "statistics"], ["routerLink", "contacts", "id", "button", 1, "contacts-button"], [1, "burger-menu-button", 3, "click"], ["class", "burger-menu-container", 4, "ngIf"], [1, "burger-menu-container"], [1, "container-link", 3, "click"], ["routerLink", "contacts"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.sideMenuIsOpened ? ctx.toggleSideMenu() : undefined; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VFS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_15_listener() { return ctx.toggleSideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_div_18_Template, 11, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sideMenuIsOpened);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\na[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: whitesmoke;\n  -webkit-tap-highlight-color: transparent;\n}\n\nnav[_ngcontent-%COMP%] {\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 60px;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1.282em 15px;\n}\n\nli[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #135aac;\n  color: white;\n  opacity: 0.92;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  padding-top: 5px;\n  font-family: 'Exo', sans-serif !important;\n  font-style: oblique;\n  font-size: 30pt;\n}\n\n.burger-menu-button[_ngcontent-%COMP%] {\n  display: none;\n  margin-right: 30px;\n  margin-top: -10px;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.burger-menu-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90px;\n  right: 0;\n  background-color: #444444d3;\n  height: 150vh;\n  width: 100%;\n  box-shadow: 0 10px 15px rgba(0,0,0,0.3);\n}\n\n.burger-menu-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 40px;\n  text-align: center;\n  margin: 30px 90px;\n  border-bottom: 1px solid darkgray;\n}\n\n.burger-menu-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 25pt;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.contacts-button[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: #135aac;\n  border-radius: 12px;\n}\n\n.contacts-button[_ngcontent-%COMP%]:active {\n  background-color: white;\n}\n\n@media (max-width: 900px) {\n  nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n\n  .burger-menu-button[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n@media (hover: hover) {\n  a[_ngcontent-%COMP%]:hover {\n    opacity: 0.7;\n  }\n\n  .burger-menu-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    background-color: darkgray;\n  }\n\n  .contacts-button[_ngcontent-%COMP%]:hover {\n    opacity: 0.7;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5uYXYgdWwge1xuICBtYXJnaW46IDA7XG59XG5cbm5hdiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuXG5uYXYgYSB7XG4gIHBhZGRpbmc6IDEuMjgyZW0gMTVweDtcbn1cblxubGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogOTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1YWFjO1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuOTI7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBmb250LXNpemU6IDMwcHQ7XG59XG5cbi5idXJnZXItbWVudS1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnVyZ2VyLW1lbnUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDkwcHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0ZDM7XG4gIGhlaWdodDogMTUwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG59XG5cbi5idXJnZXItbWVudS1jb250YWluZXIgbGkge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzMHB4IDkwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcbn1cblxuLmJ1cmdlci1tZW51LWNvbnRhaW5lciBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVwdDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvbnRhY3RzLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMTM1YWFjO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uY29udGFjdHMtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG5cbiAgLmJ1cmdlci1tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAuYnVyZ2VyLW1lbnUtY29udGFpbmVyIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbiAgfVxuXG4gIC5jb250YWN0cy1idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG59XG4iXX0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 28, vars: 0, consts: [[1, "footer"], [1, "footer-inner"], [1, "footer-inner-logo"], ["href", "https://www.instagram.com/artyom_coach/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "./assets/instagram.svg"], ["href", "https://www.facebook.com/artyomcoach/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "./assets/facebook.svg"], [2, "opacity", "0.95", "padding-top", "15px"], [1, "footer-inner-logo-title"], [1, "footer-inner-logo-subtitle"], [1, "footer-inner-contacts"], [1, "footer-inner-contacts-title"], [1, "footer-inner-contacts-items"], ["src", "./assets/phone.svg"], [1, "footer-inner-contacts-subtitle"], ["href", "tel:+37127363631"], ["src", "./assets/email.svg"], ["href", "mailto:Infinity.latvija@gmail.com"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "VFS \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+371 27363631");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Infinity.latvija@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\nli[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  height: 180px;\n  background-color:#135aac;\n  color: #ffffffd8;\n  align-items: center;\n}\n\n.footer-inner[_ngcontent-%COMP%] {\n  padding-top: 35px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer-inner-logo[_ngcontent-%COMP%] {\n  margin-left: 30%;\n}\n\n.footer-inner-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 25px;\n  max-height: 25px;\n  opacity: 0.9;\n}\n\n.footer-inner-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.footer-inner-logo-title[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding: 0;\n  font-weight: bold;\n  font-size: 14pt;\n}\n\n.footer-inner-logo-subtitle[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin: 0 !important;\n  padding: 0;\n}\n\n.footer-inner-contacts[_ngcontent-%COMP%] {\n  margin-right: 30%;\n}\n\n.footer-inner-contacts[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 20px;\n  max-height: 20px;\n  opacity: 0.9;\n}\n\n.footer-inner-contacts-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14pt;\n  padding-bottom: 10px;\n}\n\n.footer-inner-contacts-items[_ngcontent-%COMP%] {\n  width: 200px;\n  display: flex;\n  justify-content: space-between;\n  opacity: 0.95;\n}\n\n@media (max-width: 950px) {\n\n  .footer-inner-logo[_ngcontent-%COMP%] {\n    margin-left: 20%\n  }\n\n  .footer-inner-contacts[_ngcontent-%COMP%] {\n    margin-right: 20%;\n  }\n}\n\n@media (max-width: 600px) {\n  .footer[_ngcontent-%COMP%] {\n    height: 30vh;\n    display: flex;\n    justify-content: center;\n  }\n\n  .footer-inner[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n   }\n\n  .footer-inner-logo[_ngcontent-%COMP%] {\n    margin-left: 10%\n  }\n\n  .footer-inner-contacts[_ngcontent-%COMP%] {\n    margin-right: 10%\n  }\n\n  .footer-inner-logo-title[_ngcontent-%COMP%] {\n    font-size: 10pt;\n  }\n\n  .footer-inner-logo-subtitle[_ngcontent-%COMP%] {\n    font-size: 8pt;\n  }\n\n  .footer-inner-contacts-title[_ngcontent-%COMP%] {\n    font-size: 10pt;\n  }\n\n  .footer-inner-contacts-subtitle[_ngcontent-%COMP%] {\n    font-size: 8pt;\n  }\n\n  .footer-inner-contacts-items[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n}\n\n@media (hover: hover) {\n  a[_ngcontent-%COMP%]:hover {\n    opacity: 0.7;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBOztFQUVFO0lBQ0U7RUFDRjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0dBQ1o7O0VBRUQ7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxubGkgKyBsaSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmZvb3RlciB7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzEzNWFhYztcbiAgY29sb3I6ICNmZmZmZmZkODtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvb3Rlci1pbm5lciB7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mb290ZXItaW5uZXItbG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbi5mb290ZXItaW5uZXItbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDI1cHg7XG4gIG1heC1oZWlnaHQ6IDI1cHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5mb290ZXItaW5uZXItbG9nbyBpbWc6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mb290ZXItaW5uZXItbG9nby10aXRsZSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB0O1xufVxuXG4uZm9vdGVyLWlubmVyLWxvZ28tc3VidGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb290ZXItaW5uZXItY29udGFjdHMge1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuLmZvb3Rlci1pbm5lci1jb250YWN0cyBpbWcge1xuICBtYXgtd2lkdGg6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDIwcHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmZvb3Rlci1pbm5lci1jb250YWN0cy10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZm9vdGVyLWlubmVyLWNvbnRhY3RzLWl0ZW1zIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG9wYWNpdHk6IDAuOTU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xuXG4gIC5mb290ZXItaW5uZXItbG9nbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJVxuICB9XG5cbiAgLmZvb3Rlci1pbm5lci1jb250YWN0cyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mb290ZXIge1xuICAgIGhlaWdodDogMzB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmZvb3Rlci1pbm5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgIH1cblxuICAuZm9vdGVyLWlubmVyLWxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCVcbiAgfVxuXG4gIC5mb290ZXItaW5uZXItY29udGFjdHMge1xuICAgIG1hcmdpbi1yaWdodDogMTAlXG4gIH1cblxuICAuZm9vdGVyLWlubmVyLWxvZ28tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgfVxuXG4gIC5mb290ZXItaW5uZXItbG9nby1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiA4cHQ7XG4gIH1cblxuICAuZm9vdGVyLWlubmVyLWNvbnRhY3RzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gIH1cblxuICAuZm9vdGVyLWlubmVyLWNvbnRhY3RzLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDhwdDtcbiAgfVxuXG4gIC5mb290ZXItaW5uZXItY29udGFjdHMtaXRlbXMge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "gKce":
/*!***********************************!*\
  !*** ./src/app/people.service.ts ***!
  \***********************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PeopleService {
    constructor(http) {
        this.http = http;
        this.statisticsData = "https://sheets.googleapis.com/v4/spreadsheets/1VaWq_8EaxQCDNd_wdDquYg1Zgj_XZ1j7zRnaBESC3xw/values/A2:G700?key=AIzaSyBWShOPtlsq02N--cm4ZIJudonMVTKv6uA";
        this.dateOfNextTesting = "https://sheets.googleapis.com/v4/spreadsheets/1VaWq_8EaxQCDNd_wdDquYg1Zgj_XZ1j7zRnaBESC3xw/values/J2:J3?key=AIzaSyBWShOPtlsq02N--cm4ZIJudonMVTKv6uA";
    }
    getAll() {
        return this.http.get(this.statisticsData);
    }
    getDate() {
        return this.http.get(this.dateOfNextTesting);
    }
}
PeopleService.ɵfac = function PeopleService_Factory(t) { return new (t || PeopleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PeopleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeopleService, factory: PeopleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "iZNs":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ContactsComponent_form_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactsComponent_form_14_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F 10\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u0430\u0436\u0434\u044B\u0439 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u043F\u0430\u043C\u044F\u0442\u043D\u044B\u0439 \u0434\u0438\u043F\u043B\u043E\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0417\u043E\u043B\u043E\u0442\u044B\u0435 \u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0435 \u0438 \u0431\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u0437\u043D\u0430\u0447\u043A\u043E\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041F\u043E\u043C\u043D\u0438, \u0447\u0442\u043E \u0434\u0430\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0432 \u0432\u044B\u0441\u0448\u0443\u044E \u043E\u0446\u0435\u043D\u043A\u0443 \u043F\u043E \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u0430\u043C, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u043E\u0442\u043B\u0438\u0447\u043D\u0443\u044E \u0444\u043E\u0440\u043C\u0443!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043D\u0430\u0448\u0438 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \u0441 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0442\u0440\u0435\u043D\u0435\u0440\u043E\u043C!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactsComponent_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactsComponent_form_15_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0417\u0430\u043F\u0438\u0448\u0438\u0441\u044C \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443 \u043A \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0442\u0440\u0435\u043D\u0435\u0440\u0443! \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\u0441\u044F \u0442\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u043F\u0443\u0441\u0442\u044F \u0432\u0440\u0435\u043C\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactsComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactsComponent_form_16_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u044B \u0434\u043B\u044F \u043E\u0431\u0449\u0435\u043D\u0438\u044F! \u0417\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u0432\u044B\u0440\u0430\u0437\u0438\u0442\u044C \u0441\u0432\u043E\u0451 \u043C\u043D\u0435\u043D\u0438\u0435 \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.processClickOutside(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ContactsComponent_div_17_Template_div_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.detectModalMouseLeave(); })("mouseenter", function ContactsComponent_div_17_Template_div_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.detectModalMouseEnter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_div_17_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.refreshComponent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0430\u0441 \u0437\u0430 \u0442\u043E, \u0447\u0442\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u043B\u0438 \u043D\u0430\u043C. \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 24 \u0447\u0430\u0441\u043E\u0432.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
class ContactsComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mouseOnModal = false;
        this.formSubmitted = false;
        this.modalOpeneded = false;
        this.firstBlock = true;
        this.secondBlock = false;
        this.thirdBlock = false;
    }
    ngOnInit() {
    }
    handleEvent(check) {
        let eventId = check.target.id;
        if (eventId == 'test') {
            this.firstBlock = true;
            this.secondBlock = false;
            this.thirdBlock = false;
        }
        else if (eventId == 'test1') {
            this.firstBlock = false;
            this.secondBlock = true;
            this.thirdBlock = false;
        }
        else {
            this.firstBlock = false;
            this.secondBlock = false;
            this.thirdBlock = true;
        }
    }
    submitForm() {
        this.formSubmitted = !this.formSubmitted;
        this.modalOpeneded = !this.modalOpeneded;
        setTimeout(() => {
            this.refreshComponent();
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
        }
        else {
            return;
        }
    }
    showModal() {
        if (this.modalOpeneded) {
            return {
                modal: true,
                'display': 'fixed'
            };
        }
        else {
            return {
                modal: false
            };
        }
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 18, vars: 16, consts: [[1, "container-intro"], [1, "container-intro-title"], [1, "container-intro-subtitle"], [1, "container-intro-buttons"], ["id", "test", 1, "component-button-x", 2, "text-align", "center", 3, "ngStyle", "click"], ["id", "test1", 1, "component-button-x", 2, "text-align", "center", 3, "ngStyle", "click"], ["id", "test2", 1, "component-button-x", 2, "text-align", "center", 3, "ngStyle", "click"], [1, "container-inner"], ["name", "hidden_iframe", "id", "hidden_iframe", 2, "display", "none"], ["action", "https://docs.google.com/forms/d/e/1FAIpQLSdeBPpaMfV4NadpOhpfGOJXqfOktNIfmQoh7fyWHbvisftXJA/formResponse", "method", "post", "target", "hidden_iframe", 3, "submit", 4, "ngIf"], ["class", "modal", 3, "click", 4, "ngIf"], ["action", "https://docs.google.com/forms/d/e/1FAIpQLSdeBPpaMfV4NadpOhpfGOJXqfOktNIfmQoh7fyWHbvisftXJA/formResponse", "method", "post", "target", "hidden_iframe", 3, "submit"], [1, "container-inner-comments"], [1, "container-inner-comments-title"], [1, "container-inner-comments-rules"], ["type", "hidden", "id", "custId", "name", "custId", "value", "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435", "name", "entry.1125602923"], [1, "container-inner-content"], ["type", "text", "placeholder", "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F*", "name", "entry.2005620554", "required", "", 1, "component-input"], ["type", "text", "placeholder", "\u0412\u043E\u0437\u0440\u0430\u0441\u0442*", "name", "entry.1045781291", "required", "", 1, "component-input"], ["type", "tel", "placeholder", "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430*", "name", "entry.1065046570", "required", "", 1, "component-input"], [1, "component-inner-button"], ["type", "submit", "id", "button", 1, "component-button-x"], [1, "container-inner-comments-rules", 2, "text-align", "center"], ["type", "hidden", "id", "custId", "name", "custId", "value", "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443", "name", "entry.1125602923"], ["type", "hidden", "id", "custId", "name", "custId", "value", "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C", "name", "entry.1125602923"], ["type", "email", "placeholder", "E-mail*", "name", "entry.1846012067", "required", "", 1, "component-input"], ["rows", "6", "placeholder", "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435*", "name", "entry.1455110197", "required", "", 1, "component-input"], [1, "modal", 3, "click"], [1, "modal-content", 3, "mouseleave", "mouseenter"], [1, "close-button-element"], ["src", "./assets/cross.png", 1, "close-button", 3, "click"], [1, "close-container"], [1, "close-container-image"], ["src", "./assets/mail.png", 1, "close-container-image"], [1, "close-container-text"], [1, "close-container-text-title"], [1, "close-container-text-subtitle"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0438\u0436\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0446\u0435\u043B\u044C \u0441\u0432\u044F\u0437\u0438: \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443 \u0438\u043B\u0438 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u043B\u044E\u0431\u043E\u043C\u0443 \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u0432\u043E\u043F\u0440\u043E\u0441\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_6_listener($event) { return ctx.handleEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u0440\u043E\u0439\u0442\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_8_listener($event) { return ctx.handleEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_10_listener($event) { return ctx.handleEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContactsComponent_form_14_Template, 26, 0, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactsComponent_form_15_Template, 16, 0, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactsComponent_form_16_Template, 14, 0, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactsComponent_div_17_Template, 12, 0, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.firstBlock ? "#135aac" : null, ctx.firstBlock ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx.secondBlock ? "#135aac" : null, ctx.secondBlock ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.thirdBlock ? "#135aac" : null, ctx.thirdBlock ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirdBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalOpeneded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container-intro[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  width: 50%;\n  text-align: center;\n  margin: 30px auto;\n  border-bottom: 2px solid #135aac;\n}\n\n.container-intro-title[_ngcontent-%COMP%] {\n  font-size: 25pt;\n  color: rgb(49, 49, 49);\n  margin-bottom: 20px;\n  line-height: 1.4em;\n}\n\n.container-intro-subtitle[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  color: rgb(99, 99, 99);\n  padding-bottom: 20px;\n  letter-spacing: 1px;\n}\n\n.container-intro-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin: 20px;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container-inner-comments[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto 80px;\n  }\n\n.container-inner-comments-title[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  color: rgb(49, 49, 49);\n  padding-bottom: 20px;\n  letter-spacing: 1px;\n\n}\n\n.container-inner-comments-rules[_ngcontent-%COMP%] {\n  font-size: 12pt;\n  color: rgb(99, 99, 99);\n  margin-bottom: 20px;\n  list-style: inside;\n}\n\n.container-inner-content[_ngcontent-%COMP%] {\n  width: 60vh;\n  display: flex;\n  justify-content: center;\n  font-size: 15pt;\n  margin: 24px auto;\n  line-height: 1.4em;\n}\n\n.component-input[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  font-family: Lato, sans-serif !important;\n  background-color: whitesmoke;\n  width: 100%;\n  min-height: 40px;\n  max-height: 300px;\n  border: none;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 12px;\n  outline: none;\n  box-shadow: 0 1px 3px rgb(20 50 0 / 15%);\n  padding: 12px;\n}\n\n.component-inner-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n  outline: none;\n}\n\n.component-button[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: rgb(49, 49, 49);\n  font-size: 13pt;\n  opacity: 0.9;\n  outline: none;\n}\n\n.container-successful-message[_ngcontent-%COMP%] {\n  margin: 40px 40px 0 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.whitespace[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 5;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: auto 20px;\n  background-color: whitesmoke;\n  width: 700px;\n  height: 350px;\n  border-radius: 15px;\n}\n\n.close-button-element[_ngcontent-%COMP%] {\n  width: inherit;\n  text-align: right;\n  padding: 25px 25px 0 0;\n  color: red;\n  font-size: 20pt;\n  z-index: 10;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  margin-top: 20px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 15px;\n}\n\n.close-container-image[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.close-container-text[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 90%;\n}\n\n.close-container-text-title[_ngcontent-%COMP%] {\n  color: rgb(49, 49, 49);\n  margin: 10px;\n  font-size: 25pt;\n}\n\n.close-container-text-subtitle[_ngcontent-%COMP%] {\n  color: rgb(99, 99, 99);\n  margin: 20px;\n  font-size: 14pt;\n}\n\n.component-button-x[_ngcontent-%COMP%] {\n  margin: auto 20px;\n  font-size: 11pt;\n  min-width: 200px;\n  height: 40px;\n  border: none;\n  text-decoration: none;\n  display: inline-block;\n  border-radius: 12px;\n  outline: none;\n  box-shadow: 0 1px 3px rgb(20 50 0 / 15%);\n  outline: none;\n}\n\n@media (hover: hover) {\n\n  .component-button-x[_ngcontent-%COMP%] {\n    transition-duration: 0.2s;\n  }\n  .component-button-x[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    transform: translateY(-4px);\n    transition-duration: 0.2s;\n   }\n\n   .component-button[_ngcontent-%COMP%]:active {\n    background-color: white;\n  }\n\n  .component-button-x[_ngcontent-%COMP%]:active {\n    background-color: white;\n    opacity: 1;\n  }\n}\n\n@media (max-width: 700px) {\n    .container-intro-buttons[_ngcontent-%COMP%]{\n      flex-direction: column;\n    }\n\n    .component-button-x[_ngcontent-%COMP%] {\n      margin: 12px 0;\n    }\n\n    .container-inner-comments[_ngcontent-%COMP%] {\n      margin: auto 40px;\n      }\n  }\n\n@media (max-width: 600px) {\n  .container-intro[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .container-inner-content[_ngcontent-%COMP%] {\n    width: 50vh;\n  }\n}\n\n@media (max-width: 400px) {\n  .container-inner-content[_ngcontent-%COMP%] {\n    width: 35vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCOztBQUVGO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4Qyw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmOztBQUdBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQXlCO0dBQzFCOztHQUVBO0lBQ0MsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0lBQ0k7TUFDRSxzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCO0VBQ0o7O0FBRUY7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lci1pbnRybyB7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxMzVhYWM7XG59XG5cbi5jb250YWluZXItaW50cm8tdGl0bGUge1xuICBmb250LXNpemU6IDI1cHQ7XG4gIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbn1cblxuLmNvbnRhaW5lci1pbnRyby1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5jb250YWluZXItaW50cm8tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW5uZXItY29tbWVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gODBweDtcbiAgfVxuXG4uY29udGFpbmVyLWlubmVyLWNvbW1lbnRzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblxufVxuXG4uY29udGFpbmVyLWlubmVyLWNvbW1lbnRzLXJ1bGVzIHtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBsaXN0LXN0eWxlOiBpbnNpZGU7XG59XG5cbi5jb250YWluZXItaW5uZXItY29udGVudCB7XG4gIHdpZHRoOiA2MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBtYXJnaW46IDI0cHggYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xufVxuXG4uY29tcG9uZW50LWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2IoMjAgNTAgMCAvIDE1JSk7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cblxuLmNvbXBvbmVudC1pbm5lci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNvbXBvbmVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lci1zdWNjZXNzZnVsLW1lc3NhZ2Uge1xuICBtYXJnaW46IDQwcHggNDBweCAwIDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2hpdGVzcGFjZSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogNTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvIDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNsb3NlLWJ1dHRvbi1lbGVtZW50IHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAyNXB4IDI1cHggMCAwO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDIwcHQ7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uY2xvc2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uY2xvc2UtY29udGFpbmVyLWltYWdlIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uY2xvc2UtY29udGFpbmVyLXRleHQge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG5cbi5jbG9zZS1jb250YWluZXItdGV4dC10aXRsZSB7XG4gIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAyNXB0O1xufVxuXG4uY2xvc2UtY29udGFpbmVyLXRleHQtc3VidGl0bGUge1xuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xuICBtYXJnaW46IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbn1cblxuLmNvbXBvbmVudC1idXR0b24teCB7XG4gIG1hcmdpbjogYXV0byAyMHB4O1xuICBmb250LXNpemU6IDExcHQ7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYigyMCA1MCAwIC8gMTUlKTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcblxuICAuY29tcG9uZW50LWJ1dHRvbi14IHtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICB9XG4gIC5jb21wb25lbnQtYnV0dG9uLXg6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgIH1cblxuICAgLmNvbXBvbmVudC1idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5jb21wb25lbnQtYnV0dG9uLXg6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIC5jb250YWluZXItaW50cm8tYnV0dG9uc3tcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmNvbXBvbmVudC1idXR0b24teCB7XG4gICAgICBtYXJnaW46IDEycHggMDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWlubmVyLWNvbW1lbnRzIHtcbiAgICAgIG1hcmdpbjogYXV0byA0MHB4O1xuICAgICAgfVxuICB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyLWludHJvIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgLmNvbnRhaW5lci1pbm5lci1jb250ZW50IHtcbiAgICB3aWR0aDogNTB2aDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmNvbnRhaW5lci1pbm5lci1jb250ZW50IHtcbiAgICB3aWR0aDogMzV2aDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map