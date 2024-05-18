export class Product {
  constructor(
    public title: string,
    public price: number,
    public description: string,
    public images: string | string[],
    public categoryId: number,
    public id: number
  ) {}
}
