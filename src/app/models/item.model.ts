export class Item {

  constructor(
    public nombre:string,
    public img:string,
    public categoria:string,
    public usuario:any,
    public descripcion:string,
    public comentarios:string,
    public precio:number,
    public ventas:number=0,
    public reviews:any,
    public _id?:string,
  ){}
}
