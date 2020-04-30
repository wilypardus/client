export class Item {

  constructor(
    public nombre:string,
    public img:string,
    public categoria:string,
    public usuario:any,
    public descripcion:string,
    public precio:number,
    public ventas:number=0,
    public comentarios?:string,
    public reviews?:any,
    public modified?:Date,
    public created?:Date,
    public _id?:string,
  ){}
}
