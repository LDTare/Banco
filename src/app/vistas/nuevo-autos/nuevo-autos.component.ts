import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AutosI } from 'src/app/modelos/autos.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo-autos',
  templateUrl: './nuevo-autos.component.html',
  styleUrls: ['./nuevo-autos.component.css']
})
export class NuevoAutosComponent implements OnInit {

  datosAutos: any;

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
  }

  postForm(from:any){
    this.api.addauto(from).subscribe(data =>{
      console.log(data);
      this.router.navigate(['dashboardautos'])
    })
  }

  salir(){
    this.router.navigate(['dashboardautos'])
  }

}
