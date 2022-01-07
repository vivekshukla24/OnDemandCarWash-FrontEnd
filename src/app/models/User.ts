export class User {
    email:string;
    password:string;
    fullname:string;
    token:string;

    constructor(email: string, password:string, fullname: string, token:string){
        this.email=email;
        this.password=email;
        this.fullname=fullname;
        this.token=token;
    }
}