import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup,FormsModule  } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { Address } from '../model/address';
import { AddressService } from '../service/address.service'; 

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[AddressService]
})

export class AddComponent{
 
  model=new Address();
  name:string;
  address:string;
  contact:number;
  email:string;
  form: any;
    router: Router;
    constructor(private _router: Router,private addressService:AddressService){
      this.router=_router;
    }
    submitForm(){      
      debugger;
      console.log(this.model.name+ this.model.email + this.model.address+this.model.contact);
      this.addressService.addAdress(this.model) .subscribe(res =>{        
     console.log(""+res);
        }); 
        this.model=new Address();
      alert("Saved Successfully");
    }

}

