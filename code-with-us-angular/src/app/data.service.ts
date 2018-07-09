import { Injectable } from '@angular/core';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import{ Customer} from './model'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
//import * as Rx from 'rxjs/rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { Http, Headers } from '@angular/http';


@Injectable()
export class DataService {
    private customersUrl = 'api/customers';
    private statesUrl = 'api/states'

    //get staff
    constructor(
        private logger: LoggerService,
        private http: Http) {    }

    //called by the same name function in customer-list
    getCustomersP(): Promise<Customer[]> {
        this.logger.log('Getting customers as a Promise via Http ...');
    
        return this.http.get(this.customersUrl) // <-- returns an observable
          .toPromise()  // <-- convert immediately to a promise
          .then(response => {
            const custs = response.json().data as Customer[]; // <-- extract data from the response
            this.logger.log(`Got ${custs.length} customers`);
            return custs;
          })
          .catch((error: any) => {
            this.logger.log(`An error occurred ${error}`); // for demo purposes only
            // re-throw user-facing message
            return Promise.reject('Something bad happened with customers; please check the console');
          });
      }
    getCustomers():Observable<Customer[]>{
        this.logger.log(`Got customers as a Observable...`);
        
        return this.http.get(this.customersUrl)
        .map(response => response.json().data as Customer[])
        .do((custs) => {
            this.logger.log(`Got customers as a Observable...`);
        }).catch((error: any) => {
            this.logger.log(`An error occurred ${error}`); // for demo purposes only
            // re-throw user-facing message
            return Observable.throw('Something bad happened with customers; please check the console');
        });
        
        // const customers = createTestCustomers();
        // return of(customers)
        //     .delay(1500)
        //     .do(()=>{
        //         this.logger.log(`Got ${customers.length} customers`);
        //     });
    }
    getStates():Observable<string[]>{
        this.logger.log(` Got states as a Observable...`);
        return this.http.get(this.statesUrl)
        .map(response => response.json().data as string[])
        .do((states) => {
            this.logger.log(`Got ${states.length} states`);
        }).catch((error: any) => {
            this.logger.log(`An error occurred ${error}`); // for demo purposes only
            // re-throw user-facing message
            return Observable.throw('Something bad happened with states; please check the console')
        });
     }
}