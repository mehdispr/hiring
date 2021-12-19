import { Component, OnInit } from '@angular/core';

import { ClientService } from '../client.service';

import { ActivatedRoute, Router } from '@angular/router';

import { Client } from '../client';

    

@Component({

  selector: 'app-view',

  templateUrl: './view.component.html',

  styleUrls: ['./view.component.css']

})

export class ViewComponent implements OnInit {

     

  client_id!: number;

  client!: Client;

  constructor(

    public clientService: ClientService,

    private route: ActivatedRoute,

    private router: Router

   ) { }

    

  ngOnInit(): void {

    this.client_id = this.route.snapshot.params['client_id'];

    

    this.clientService.find(this.client_id).subscribe((data: Client)=>{

      this.client = data;
      console.log(this.client);
      
    });

  }

    

}