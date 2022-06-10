import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { EmpleadoI } from 'src/app/modelos/empleado.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css']
})
export class EditarEmpleadosComponent implements OnInit {

  datosEmpleado: any;

  editarData = new FormGroup({
    Dpi: new FormControl(''),
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    Telefono: new FormControl(''),
    Estado: new FormControl('')
  });

  constructor(private activerouter: ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let empleadoID = this.activerouter.snapshot.paramMap.get('id')
    this.api.getemploye(empleadoID).subscribe(data =>{
      this.datosEmpleado = data
      this.editarData.setValue({
        'Dpi': this.datosEmpleado.Dpi,
        'Nombre': this.datosEmpleado.Nombre,
        'Apellido': this.datosEmpleado.Apellido,
        'Telefono': this.datosEmpleado.Telefono,
        'Estado': this.datosEmpleado.Estado
      });
      console.log(this.editarData.value)
    })
  }

  postForm(from:any, id:any){
    let empleadoID = this.activerouter.snapshot.paramMap.get('id')
    this.api.putemploye(from, empleadoID).subscribe( data=>{
      console.log(data);
      this.router.navigate(['dashboardemp'])
    })
  }

  eliminar(id:any){
    let empleadoID = this.activerouter.snapshot.paramMap.get('id')
    this.api.deleteemploye(empleadoID).subscribe( data => {
      console.log(data);
      this.router.navigate(['dashboardemp'])
    })
  }

  salir(){
    this.router.navigate(['dashboardemp'])
  }

}
