export class Purchase {
    constructor(private id: string, private userId: string, private productId: string, private quantity: number, private totalPrice: number) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    public setId (newId:string):void {
        this.id = newId;
    };
    public getId():string {
        return this.id
    };
    public setUserId(newUserId:string):void {
        this.userId = newUserId;
    };
    public getUserId():string {
        return this.userId
    };
    public setProductId(newProductId:string):void {
        this.productId = newProductId;
    };
    public getProductId():string {
        return this.productId
    };
    public setQuantity(newQuantity:number):void {
        this.quantity = newQuantity;
    };
    public getQuantity():number {
        return this.quantity
    };
    public setTotalPrice(newTotalPrice:number):void {
        this.totalPrice = newTotalPrice;
    };
    public getTotalPrice():number {
        return this.totalPrice
    };
}