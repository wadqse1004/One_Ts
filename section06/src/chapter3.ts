/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    speed: number;
    move(): void;
}

class Character implements CharacterInterface{
    name: string;
    speed: number;

    constructor(name:string, speed:number){
        this.name = name;
        this.speed = speed;
    }

    move(): void {
        console.log(`${this.speed}속도로 이동`)
    }
}