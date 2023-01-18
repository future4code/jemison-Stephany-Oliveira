export class User {
    constructor(private id: string, private email: string, private password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public setId (newId:string):void {
        this.id = newId;
    };
    public getId():string {
        return this.id
    };
    public setEmail(newEmail:string):void {
        this.email = newEmail;
    };
    public getEmail():string {
        return this.email
    };
    public setPassword(newPassword:string):void {
        this.password = newPassword;
    };
    public getPassword():string {
        return this.password
    };
}