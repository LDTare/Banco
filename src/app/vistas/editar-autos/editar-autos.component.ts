import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AutosI } from 'src/app/modelos/autos.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-autos',
  templateUrl: './editar-autos.component.html',
  styleUrls: ['./editar-autos.component.css']
})
export class EditarAutosComponent implements OnInit {

  datosAuto: any;

  editarData = new FormGroup({
    Placa: new FormControl(''),
    Modelo: new FormControl(''),
    Marca: new FormControl(''),
    Color: new FormControl(''),
    Anio: new FormControl(''),
    Estado: new FormControl('')
  });

  constructor(private activerouter: ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    let autoID = this.activerouter.snapshot.paramMap.get('id')
    this.api.getAuto(autoID).subscribe(data =>{
      this.datosAuto = data
      this.editarData.setValue({
        'Placa': this.datosAuto.Placa,
        'Modelo': this.datosAuto.Modelo,
        'Marca': this.datosAuto.Marca,
        'Color': this.datosAuto.Color,
        'Anio': this.datosAuto.Color,
        'Estado': this.datosAuto.Estado
      });
      console.log(this.editarData.value)
    })
  }

  postForm(from:any, id:any){
    let autoID = this.activerouter.snapshot.paramMap.get('id')
    this.api.putAuto (from, autoID).subscribe( data=>{
      console.log(data);
      this.router.navigate(['dashboardautos'])
    })
  }

  eliminar(id:any){
    let empleadoID = this.activerouter.snapshot.paramMap.get('id')
    this.api.deleteauto (empleadoID).subscribe( data => {
      console.log(data);
      this.router.navigate(['dashboardautos'])
    })
  }

  salir(){
    this.router.navigate(['dashboardautos'])
  }

}
