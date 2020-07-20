import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom components
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { GoogleChartModule } from './google-chart/google-chart.module';
import { AppComponent } from './components/app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ResultComponent } from './components/result/result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StoreComponent } from './components/store/store.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckInModalComponent } from './components/check-in-modal/check-in-modal.component';

// Material Angular components
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Services
import { ApiService } from './api/api.service';

// Pipes
import { RoundPipe } from './pipes/round.pipe';
import { HttpErrorComponent } from './components/http-error/http-error.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

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
    RoundPipe,
    HttpErrorComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    GoogleChartModule,
    GoogleMapsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  // Set of components to compile when NgModule is defined to be
  // dynamically loaded into view
  entryComponents: [CheckInModalComponent]
})
export class AppModule { }
