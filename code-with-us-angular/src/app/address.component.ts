import { Component, Input, OnInit } from '@angular/core';
import {Customer} from './model'
import { DataService } from './data.service';


@Component({
  moduleId: module.id, //relative module
  selector: 'address-comp',
  templateUrl: 'address.component.html'
})
export class AddressComponent implements OnInit  { 
  regions = ['East', 'South','North','West','Midwest'];
  states: string [];
  constructor(private dataService: DataService){

  }
  ngOnInit(){
    this.dataService.getStates().subscribe(states =>{
      this.states = states;
    });
  }

  @Input() customer: Customer;
  //need get customer detail from customer list
  //@Input() to let html knows this tag need an input
  showAddress = true;

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