import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string,tipo: string='usuario'): any {

  let url=URL_SERVICIOS + '/img';
  if(!img){
    return url + '/usuarios/nop'
  }

  if(img.indexOf('https')>=0){
    return img;
  }

  switch (tipo){
      case 'usuario':
        url += '/usuarios/'+img;
        break;

      case 'items':
        url += '/items/'+img;
        break;

      case 'producto':
        url += '/productos/'+img;
        break;

      default:
        console.log('Tipo de imágen no exite, usuario,item o producto');
        url += '/usuarios/nop';
    }

    return url
  }

}
