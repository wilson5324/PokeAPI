export class Pokemon {
    id: number;
    name: string;
    spriteImg: string;
    height: number;
    weight: number;

    constructor(id: number, name: string, height: number, weight: number, spriteImg: string) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.spriteImg = spriteImg
    }
    
}