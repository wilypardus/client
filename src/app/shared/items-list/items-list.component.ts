import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item.model';
import { Usuario } from '../../models/usuario.model';
import { AutorItemsService } from '../../services/shared/autor-items.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ItemService } from '../../services/shared/item.service';
import { FiltrosService } from '../../services/shared/filtros.service';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SearchService } from '../../services/shared/search.service';




@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styles: [
  ]
})

export class ItemsListComponent implements OnInit, OnChanges {
  @Input()id = 0;
  @Input()limite = 12;
  @Input()filtro = true;
  @Input()paginacion = true;
  @Input()busqueda = null;
  @Input()todo;



  @Output('totalRegistros') registros: EventEmitter <number> = new EventEmitter;




  items: Item[] = [];
  totalRegistros = 0;
  usuario: Usuario;
  p = 1;

  isUser: string;

  constructor(
    public _autorItemsService: AutorItemsService,
    public _usuarioService: UsuarioService,
    public _itemsService: ItemService,
    public _filtrosService: FiltrosService,
    private router: Router,
    public _searchService: SearchService

    ) {
      if (this.todo = true){
        this._itemsService.getItems().subscribe((resp: any) => {
          this.items = resp.items;
          this.totalRegistros = resp.items.length;
          // console.log(resp);
          // console.log(this.items);
          });
      }

      if (this.busqueda = null)
{this._searchService.buscar(this.busqueda).subscribe((resp: any) => {

    this.items = resp.items;


        // console.log("itemssadasd",this.items);


      });}else{

      this.getDataRoute()
      .subscribe(data => {
      this.isUser = data.isUser;
      });
      console.log(this.isUser);
    }
    }

    ngOnChanges(): void{
      if (this.busqueda != null)
      {this._searchService.buscar(this.busqueda).subscribe((resp: any) => {

        this.items = resp.items;
        // console.log(resp.items);
        this.totalRegistros = resp.items.length;
        this.registros.emit(this.totalRegistros);


        console.log('itemssadasd', this.items);


      });}
      if (this.id && this.busqueda){
        this.recibirId(this.id);

        this.getDataRoute()
      .subscribe(data => {
      this.isUser = data.isUser;
      });
      // console.log(this.isUser);
    }
    }

  ngOnInit(): void {
    if (this.busqueda)
      {this._searchService.buscar(this.busqueda).subscribe((resp: any) => {

        this.items = resp.items;
        this.totalRegistros = resp.items.length;
        this.registros.emit(this.totalRegistros);


        console.log('itemssadasd', this.items);


      });}
    if (this.id){
        this.recibirId(this.id);

        this.getDataRoute()
      .subscribe(data => {
      this.isUser = data.isUser;
      });
      // console.log(this.isUser);
    }
  }
  getDataRoute(){
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );

  }

  cambiarLimite(){
    this.items = [];
    const resp = this.recibirId(this.id = 0);
  }

  recibirId(id= 0){
    if (id === 0){
      this._itemsService.getItems().subscribe((resp: any) => {
        this.items = resp.items;
        this.totalRegistros = resp.items.length;
        // console.log(resp);
        // console.log(this.items);
        });
    }else{
      this._itemsService.getItemsAutor(this.id).subscribe((resp: any) => {
        this.items = resp.item;
        this.totalRegistros = resp.item.length;
        // console.log(resp);
        // console.log(this.totalRegistros);
    });
  }

}


scrollToTop() {
  (function smoothscroll() {

      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
  })();
}
// enviarId(id:string){
//   this.router.navigate(['./user/actualizar-item',itemId]);
// }

}
