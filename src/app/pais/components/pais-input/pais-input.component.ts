import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = "";
  debouncer: Subject<string> = new Subject(); // se emite al dejar de escribir

  termino: string = '';
  //  Solo se dispara cuando el componente es creado
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))// no hace el suscribe hasta que pasa el tiempo
      .subscribe(valor => this.onDebounce.emit(valor));
  }
  buscar() {
    this.onEnter.emit(this.termino);
  }
  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
