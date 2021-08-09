export class Aluno {
    id: number;
    name: string;
    age: number;
    email: string;
    cpf: string;
    phone: string;
    

    constructor(id: number, name: string, age: number, email: string, cpf: string, phone: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.cpf = cpf;
        this.phone = phone;
    }
}