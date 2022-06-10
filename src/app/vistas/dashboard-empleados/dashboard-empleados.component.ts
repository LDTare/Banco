import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';

import { ListaEmpleadosI } from 'src/app/modelos/listaempleados.interface';

@Component({
  selector: 'app-dashboard-empleados',
  templateUrl: './dashboard-empleados.component.html',
  styleUrls: ['./dashboard-empleados.component.css']
})
export class DashboardEmpleadosComponent implements OnInit {

  empleados: any[] = [];

  constructor(private api:ApiService, private router:Router, private titulo:Title) {
    titulo.setTitle("Dashboard")
   }

  ngOnInit(): void {
    this.api.getAllEmployes().subscribe(data => {
      this.empleados = data;
    })
  }

  editarEmpleado(id:any){
    this.router.navigate(['editaremp',id])
  }

  nuevoEmpleado(){
    this.router.navigate(['nuevoemp'])
  }
}
