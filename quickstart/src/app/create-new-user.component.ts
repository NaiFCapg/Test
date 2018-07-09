import { Component, OnInit } from '@angular/core';
import { Customer } from './model';
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: 'create-new-user',
    templateUrl: 'create-new-user.component.html'
})

export class CreateNewUserComponent implements OnInit {
    customer :Customer = new Customer();
    
    showAddress = true;
    sexes = ["male", "female", "neutral"];
    regions = ['East', 'South','North','West','Midwest'];
    states: string [];
    constructor(private dataService: DataService) { }

    ngOnInit() { 
        this.dataService.getStates().subscribe(states =>{
            this.states = states;
        });
    }
}