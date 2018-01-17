import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ ContactService } from './contact.service';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
