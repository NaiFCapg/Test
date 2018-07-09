import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Customer} from './model'


@Component({
  moduleId: module.id, //relative module
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent  { 
  regions = ['East', 'South','North','West','Midwest'];
  states = ['AB','BC','California','Illinois','Jalisco','Quebec','ON'];

  @Input() customer: Customer;
  @Output() shift = new EventEmitter<number>();
  //need get customer detail from customer list
  //@Input() to let html knows this tag need an input
  showAddress = true;
  right(){
    this.shift.emit(1);
    //just sending things out
  }

  left(){
    this.shift.emit(-1);
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