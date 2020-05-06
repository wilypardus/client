import { Component, OnInit, Input,OnChanges, Output, EventEmitter  } from '@angular/core';
import { SearchService } from '../../services/shared/search.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import { FiltrosService } from '../../services/shared/filtros.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit,OnChanges {
  @Input()busqueda = null;
  @Input()limite = 12;
  @Input()filtro = true;
  @Input()paginacion = true;




  @Output('totalRegistrosUser') registros: EventEmitter <number> = new EventEmitter;

  totalRegistrosUser=0;
  usuarios;
  p = 1;

  constructor(
    private router: Router,
    public _searchService: SearchService,
    public _filtrosService: FiltrosService,

  ) {
    this._searchService.buscar(this.busqueda).subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
      this.totalRegistrosUser = resp.usuarios.length;
      this.registros.emit(this.totalRegistrosUser);

            //console.log("usuarios",this.usuarios);
          })
   }



  ngOnInit(): void {
    this._searchService.buscar(this.busqueda).subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
      this.totalRegistrosUser = resp.usuarios.length;
            console.log("usuarios",this.usuarios);
      this.registros.emit(this.totalRegistrosUser);

          })
  }
  ngOnChanges():void{

    this._searchService.buscar(this.busqueda).subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
      this.totalRegistrosUser = resp.usuarios.length;
      this.registros.emit(this.totalRegistrosUser);

            // console.log("usuarios",this.usuarios);
          })
  }

}
