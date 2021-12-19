import { Component, OnInit } from '@angular/core';

import { ClientService } from '../client.service';

import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators} from '@angular/forms';

     

@Component({

  selector: 'app-create',

  templateUrl: './create.component.html',

  styleUrls: ['./create.component.css']

})

export class CreateComponent implements OnInit {

    

  // form!: FormGroup;
  form: FormGroup;

    

  /*------------------------------------------

  --------------------------------------------

  Created constructor

  --------------------------------------------

  --------------------------------------------*/

  constructor(

    public clientService: ClientService,

    private router: Router

  ) { }


  ngOnInit(): void {

    this.form = new FormGroup({

      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      company_name: new FormControl('', [Validators.required]),
      street_address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      postal_code: new FormControl('', [Validators.required]),
      contact_email: new FormControl('', [Validators.required,Validators.email]),
      contact_phone: new FormControl('', [Validators.required]),
      date_added: new FormControl('', [Validators.required]),

    });

  }

    


  get f(){

    return this.form.controls;

  }

    

  submit(){


    this.clientService.create(this.form.value).subscribe((res:any) => {

         console.log('Client created successfully!');

         this.router.navigateByUrl('client/index');

    })

  }

  

}