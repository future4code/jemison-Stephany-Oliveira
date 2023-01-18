export class Product {
    constructor(private id: string, private name: string, private price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public setId (newId:string):void {
        this.id = newId;
    };
    public getId():string {
        return this.id
    };
    public setName(newName:string):void {
        this.name = newName;
    };
    public getName():string {
        return this.name
    };
    public setPrice(newPrice:number):void {
        this.price = newPrice;
    };
    public getPrice():number {
        return this.price
    };
}