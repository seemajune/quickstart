import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { AboutComponent }  from './about/about.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ 
    BrowserModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
