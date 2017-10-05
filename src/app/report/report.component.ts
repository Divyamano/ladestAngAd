import { Component ,OnInit} from '@angular/core';
import { Address } from '../model/address';
import { Router,RouterModule } from '@angular/router';
import { AddressService } from '../service/address.service'; 

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module";


const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:[AddressService,NgbTypeaheadConfig]
})
export class ReportComponent {


  public model: any;
  testvalue:any=[];
  private carsExample2:Array<any> = [];
  formatter = (result: string) => result.toUpperCase();
  addressList:Address;
    
  search = (text$: Observable<string>) =>
  text$
    .debounceTime(200)
    .distinctUntilChanged()
    .map(term => term.length < 1 ? []
      : this.carsExample2.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  address:Address;

router: Router;
constructor(private _router: Router,private addressService:AddressService,config: NgbTypeaheadConfig){
  config.showHint = true;
  this.router=_router;
}
ngOnInit() {
  this.getDetails();
}
getDetails(){
  this.addressService.getDetails().subscribe(res =>{
    debugger;
    this.addressList=res;
    this.testvalue=this.addressList.name;
    for(var i in res){
    this.carsExample2.push(res[i].name);
  }
    debugger;
  });
}
editAddress(value:any){
alert("Record Edited");
}
deleteAddress(value:any){
  this.addressService.removeAddress(value).subscribe(reg =>{  
    debugger;    
  });

  //this.router.navigateByUrl('/add');
  this.addressList=new Address();
  this.getDetails();
  this.router.navigateByUrl('/report');
  alert("Record Deleted Refresh the Page");
}
}

``