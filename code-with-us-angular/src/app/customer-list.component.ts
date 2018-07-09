import { Component, OnInit } from '@angular/core';
import {Customer} from './model'
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id, //relative module
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls:['customer-list.component.css']
})
export class CustomerListComponent implements OnInit { 
  
  customers: Customer[];
  customer: Customer //= this.customers[0];
  isBusy = false;

  constructor(private dataService: DataService,
  private loggerService: LoggerService){

  }
  // lifecycle goes here
  ngOnInit(){
    //only function in OnInit
    this.getCustomers();
  }

  getCustomers(){
    this.isBusy = true;
    this.loggerService.log('Getting customers...');
    //this.customers = this.dataService.getCustomers(); //synchronize
    //this.dataService.getCustomersP().then(custs=>{ //async, promise
    this.dataService.getCustomers().subscribe(custs=>{ //async,
      this.isBusy = false;
      this.customers = custs;
    },(errorMsg: string) =>{
      this.isBusy = false;
      alert(errorMsg);
    }
  
  );
  }

  shift(increment:number){
    let ix = this.customers.findIndex(c => c===this.customer) + increment;
    ix = Math.min(this.customers.length-1, Math.max(0,ix));
    this.customer = this.customers[ix];
  }
}


/*  <br/>
<fieldset> 
<img src={{image}}/> <!-- interpolation -->
<img [src]="image"/> <!-- property binding -->
</fieldset>
<label [style.color]="color">Favorite Color:</label>
<button (click)="cliked()">Toggle Color</button> <!-- event binding -->
<!--<select #selector (change) = "colorChange(selector.value)">
'#' means a variable created that indicate it self -->
<select (change) = "colorChange($event.target.value)"> <!--event change with '$event' -->
<option>red</option>
<option>blue</option>
<option>green</option>
</select> 

      <input [value]="name"> <br/>
      <input [value]="name" (input)="name=$event.target.value"><br/> 
      <!--keyup/keyup.enter/blur also work as input -->
*/