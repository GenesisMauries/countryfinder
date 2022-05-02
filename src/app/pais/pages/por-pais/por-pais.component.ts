import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

termino: string= ""
hayError: boolean= false
constructor(private paisService:PaisService) { }
buscar(){
  this.hayError= false
  this.paisService.buscarPais(this.termino)
  .subscribe(resp=>{console.log(resp)}, error=>{this.hayError=true})
}
}
 