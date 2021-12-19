import { Component, OnInit } from '@angular/core';

import { ClientService } from '../client.service';

import { ActivatedRoute, Router } from '@angular/router';

import { Client } from '../client';

import { FormGroup, FormControl, Validators} from '@angular/forms';

     

@Component({

  selector: 'app-edit',

  templateUrl: './edit.component.html',

  styleUrls: ['./edit.component.css']

})

export class EditComponent implements OnInit {

      

  client_id!: number;

  client!: Client;

  form!: FormGroup;

    

  constructor(

    public clientService: ClientService,

    private route: ActivatedRoute,

    private router: Router

  ) { }

    


  ngOnInit(): void {

    this.client_id = this.route.snapshot.params['client_id'];

    this.clientService.find(this.client_id).subscribe((data: Client)=>{

      this.client = data;

    }); 

      

    this.form = new FormGroup({
      client_id: new FormControl('', [Validators.required]),
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

    console.log(this.form.value);

    this.clientService.update(this.client_id, this.form.value).subscribe((res:any) => {

         console.log('Client updated successfully!');

         this.router.navigateByUrl('client/index');

    })

  }

   

}