import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IntroductionComponent } from './homepage/introduction/introduction.component';
import { PartnersComponent } from './homepage/partners/partners.component';
import { TrainingsComponent } from './homepage/trainings/trainings.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    StatisticsComponent,
    ContactsComponent,
    IntroductionComponent,
    PartnersComponent,
    TrainingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'statistics', component: StatisticsComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: '**', component: HomepageComponent},
        ],
        {scrollPositionRestoration: "top"}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
