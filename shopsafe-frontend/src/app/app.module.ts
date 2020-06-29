import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ResultComponent } from './components/result/result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreComponent } from './components/store/store.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckInModalComponent } from './components/check-in-modal/check-in-modal.component';

// Material Angular components
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ResultComponent,
    PageNotFoundComponent,
    StoreComponent,
    AboutComponent,
    FooterComponent,
    CheckInModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // Set of components to compile when NgModule is defined to be
  // dynamically loaded into view
  entryComponents: [CheckInModalComponent]
})
export class AppModule { }
