import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientfeedbackComponent } from './clientfeedback/clientfeedback.component';
import { WeofferComponent } from './weoffer/weoffer.component';
import { CounterComponent } from './counter/counter.component';
import { FocusComponent } from './focus/focus.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { WhyusComponent } from './whyus/whyus.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TestimonialComponent,
    ClientfeedbackComponent,
    WeofferComponent,
    CounterComponent,
    FocusComponent,
    AboutComponent,
    BannerComponent,
    HeaderComponent,
    TeamComponent,
    WhyusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
