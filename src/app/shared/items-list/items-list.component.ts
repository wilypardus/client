import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { Usuario } from '../../models/usuario.model';
import { AutorItemsService } from '../../services/shared/autor-items.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ItemService } from '../../services/shared/item.service';
import { FiltrosService } from '../../services/shared/filtros.service';
import { Router, ActivationEnd } from '@angular/router';
import { filter,map } from 'rxjs/operators';



@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styles: [
  ]
})

export class ItemsListComponent implements OnInit {
  @Input()id;
  @Input()limite=12;
  @Input()filtro=true;
  @Input()paginacion=true;




  items: Item[] = [];
  totalRegistros : number = 0;
  usuario: Usuario;
  p: number = 1;

  isUser:string;

  constructor(
    public _autorItemsService : AutorItemsService,
    public _usuarioService : UsuarioService,
    public _itemsService : ItemService,
    public _filtrosService : FiltrosService,
    private router:Router,
    ) {

      this.getDataRoute()
      .subscribe(data=>{
      this.isUser=data.isUser;
      })
      console.log(this.isUser);

    }

  ngOnInit(): void {
    this.recibirId(this.id);
  }
  getDataRoute(){
    return this.router.events.pipe(
      filter(evento=>evento instanceof ActivationEnd),
      filter((evento:ActivationEnd)=> evento.snapshot.firstChild === null),
      map((evento:ActivationEnd)=>evento.snapshot.data)
    )

  }

  cambiarLimite(){
    this.items=[];
    let resp=this.recibirId(this.id=0);
  }

  recibirId(id=0){
    if(id===0){
      this._itemsService.getItems().subscribe((resp:any)=>{
        this.items=resp.items;
        this.totalRegistros=resp.items.length;
        //console.log(resp);
        //console.log(this.items);
        })
    }else{
      this._itemsService.getItemsAutor(this.id).subscribe((resp:any)=>{
        this.items=resp.item;
        this.totalRegistros=resp.item.length;
        //console.log(resp);
        //console.log(this.totalRegistros);
    })
  }

}


scrollToTop() {
  (function smoothscroll() {

      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
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
