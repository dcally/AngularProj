import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator, NgControl } from '@angular/forms';
import { AnimationBuilder, AnimationTriggerMetadata } from '@angular/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
