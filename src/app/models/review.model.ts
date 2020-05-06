export class Review {

  constructor(
    public puntuacion:number,
    public usuario:any,
    public item:string,
    public compra:string,
    public descripcion:number,
    public created?:Date,
    public modified?:Date,
    public _id?:string,
  ){}
}
