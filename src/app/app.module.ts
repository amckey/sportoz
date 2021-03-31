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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    StatisticsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'statistics', component: StatisticsComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: '**', component: HomepageComponent},
        ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
