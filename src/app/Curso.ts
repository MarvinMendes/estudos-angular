export class Curso {
    id: number;
    private name: string;
    private description: string;
    private price: number;
    private rating: number;

    constructor(id: number, name: string, description: string, price: number, rating: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating = rating;
    }

    
}