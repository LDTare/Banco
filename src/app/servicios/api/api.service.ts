import { Injectable } from '@angular/core';
import { ListaEmpleadosI } from 'src/app/modelos/listaempleados.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoI } from 'src/app/modelos/empleado.interface';
import { ListaAutosI } from 'src/app/modelos/listaautos.interface';
import { AutosI } from 'src/app/modelos/autos.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //Emp

  getAllEmployes():Observable<ListaEmpleadosI[]>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Owners"
    return this.http.get<ListaEmpleadosI[]>(direccion)
  }

  getemploye(id:any):Observable<EmpleadoI>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Owners/" + id;
    return this.http.get<EmpleadoI>(direccion);
  }

  putemploye(from:EmpleadoI, id:any):Observable<EmpleadoI>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Owners/" + id;
    return this.http.put<EmpleadoI>(direccion, from);
  }

  deleteemploye(id:any):Observable<EmpleadoI>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Owners/" + id;
    return this.http.delete<EmpleadoI>(direccion);
  }

  addemploye(from:EmpleadoI):Observable<EmpleadoI>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Owners";
    return this.http.post<EmpleadoI>(direccion, from);
  }

  //Autos
  getAllAutos():Observable<ListaAutosI[]>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Autos"
    return this.http.get<ListaAutosI[]>(direccion)
  }

  getAuto(id:any):Observable<AutosI>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Autos/" + id;
    return this.http.get<AutosI>(direccion);
  }

  putAuto(from:AutosI, id:any):Observable<AutosI>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Autos/" + id;
    return this.http.put<AutosI>(direccion, from);
  }

  deleteauto(id:any):Observable<AutosI>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Autos/" + id;
    return this.http.delete<AutosI>(direccion);
  }

  addauto(from:AutosI):Observable<AutosI>{
    let direccion = "https://octopus-app-zuxo6.ondigitalocean.app/Autos";
    return this.http.post<AutosI>(direccion, from);
  }
  
}
