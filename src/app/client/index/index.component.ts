import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

import {MatTableDataSource} from '@angular/material/table';
import { Client } from '../client';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
      

  clients: Client[] = [];
  dataSource = new MatTableDataSource(this.clients);
  constructor(public clientService: ClientService) { }



  ngOnInit(): void {
    this.clientService.getAll().subscribe((data: Client[])=>{

      this.clients = data;

      console.log(this.clients);

    })  

  }

    

  deleteClient(client_id:number){

    this.clientService.delete(client_id).subscribe(res => {

         this.clients = this.clients.filter(item => item.client_id !== client_id);

         console.log('Post deleted successfully!');

    })

  }

    

}
