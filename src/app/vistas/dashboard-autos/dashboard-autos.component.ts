import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';

import { ListaAutosI} from 'src/app/modelos/listaautos.interface';

@Component({
  selector: 'app-dashboard-autos',
  templateUrl: './dashboard-autos.component.html',
  styleUrls: ['./dashboard-autos.component.css']
})
export class DashboardAutosComponent implements OnInit {

  autos: any[] = []
  constructor(private api:ApiService, private router:Router, private titulo:Title) { 
    titulo.setTitle("Dashboard")
  }

  ngOnInit(): void {
    this.api.getAllAutos().subscribe(data => {
      this.autos = data;
    })
  }

  editarAuto(id:any){
    this.router.navigate(['editarautos',id])
  }

  nuevoAuto(){
    this.router.navigate(['nuevoautos'])
  }
}
