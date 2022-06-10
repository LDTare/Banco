import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { EmpleadoI } from 'src/app/modelos/empleado.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-empleados',
  templateUrl: './nuevo-empleados.component.html',
  styleUrls: ['./nuevo-empleados.component.css']
})
export class NuevoEmpleadosComponent implements OnInit {

  datosEmpleado: any;

  editarData = new FormGroup({
    Dpi: new FormControl(''),
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    Telefono: new FormControl(''),
    Estado: new FormControl('')
  });

  constructor( private activerouter: ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
  }

  postForm(from:any){
    this.api.addemploye(from).subscribe( data=>{
      console.log(data);
      this.router.navigate(['dashboardemp'])
    })
    }
  
    salir(){
      this.router.navigate(['dashboardemp'])
    }

}
