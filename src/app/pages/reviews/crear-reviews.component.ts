import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Review } from '../../models/review.model';
import { ReviewsService } from '../../services/shared/reviews.service';

@Component({
  selector: 'app-crear-reviews',
  templateUrl: './crear-reviews.component.html',
  styles: [
  ]
})
export class CrearReviewsComponent implements OnInit {
usuario;
formReview:FormGroup;
token;
itemId="5eaeef8c0243171707c8f197";
compra;
  constructor(
    public _usuarioService: UsuarioService,
    public _reviewsService:ReviewsService
  ) {
  }

  ngOnInit(): void {
    this.usuario = this._usuarioService.usuario;

    this.formReview = new FormGroup({
      puntuacion: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required),

}, );
// Obtener Token
this.token = localStorage.getItem('token');

  }

  //Crear Review
  crearReview(){
    if(this.formReview.invalid){
      return;
    }
    const review= new Review(
      this.formReview.value.puntuacion,
      this.usuario,
      this.itemId,
      this.compra,
      this.formReview.value.descripcion
    )
    this._reviewsService.crearReview(review,this.token).subscribe((resp)=>{
      console.log(resp);
    })
  }

}
