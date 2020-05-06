import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReviewsService } from '../../services/shared/reviews.service';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styles: [
  ]
})
export class ReviewsComponent implements OnInit {
@Input() itemId;
reviews: any;
totalRegistros;
valoracionMedia = 0;
calculo = 0;


@Output('totalRegistros') registros: EventEmitter <number> = new EventEmitter;
@Output('valoracionMedia') media: EventEmitter <number> = new EventEmitter;


  constructor(
    public _reviewsServices: ReviewsService
  ) {
  this._reviewsServices.getItemReviews(this.itemId).subscribe((resp: any) => {
  this.reviews = resp.itemReviews;
  this.totalRegistros = resp.itemReviews.length;
  this.registros.emit(this.totalRegistros);
  this.sacarMedia();
  // console.log(this.reviews);
  });
 }

  ngOnInit(): void {
  }

sacarMedia(){
  this.reviews.forEach(element => {
    // console.log(element.puntuacion);
    const puntuacion: number = element.puntuacion;
    this.calculo = this.calculo + puntuacion;
    // console.log(this.valoracionMedia);
  });
  // console.log(this.calculo);
  this.valoracionMedia = (this.calculo / this.reviews.length);
  this.media.emit(this.valoracionMedia);
  // console.log(this.reviews.length);
  // console.log(this.valoracionMedia);
}


}
