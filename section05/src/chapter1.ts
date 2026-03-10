/**
 * 인터페이스의 확장, 상속
 */

interface Animal {
    name: string;
    age: number;
}

interface Dog  extends Animal{
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    age: 0,
    isBark: true
}

type Animal2 = {
    name: string;
    age: number;
}

interface Dog2 extends Animal2 {
    isBark: boolean;
}

interface Cat {
    isRun: boolean;
}

interface DogCat extends Dog2, Cat{
    
}