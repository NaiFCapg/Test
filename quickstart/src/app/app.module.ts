import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from  './in-memory-data.service'
import { HttpModule } from '@angular/http';
import { CreateNewUserComponent } from './create-new-user.component';

//so this guy describe the class that follows it
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    HttpModule,  // <--  add HttpModule here

    InMemoryWebApiModule.forRoot(InMemoryDataService) // <-- register in-mem-web-api and its data
  ],
    
    //what stuff do i need
  declarations: [ 
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent,
    CreateNewUserComponent
  ], //what things are in my app
  providers: [
    DataService,
    LoggerService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

