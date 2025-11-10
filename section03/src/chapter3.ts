/**
 * 기본 타입간의 호환성
 */

let num1: number = 1;
let num2: 10 = 10;

//number는 10보다 큰 슈퍼타입으로 가능, 반대는 불가능
num1 = num2;
//num2 = num1;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "yellow"
}

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
}

//animal타입은 dog타입을 포함하는 슈퍼타입
animal = dog;
//dog = animal;

type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let proBook: ProgrammingBook = {
    name: "한입",
    price: 30000,
    skill: "TS"
}

book = proBook;
//proBook = book;


/**
 * 초과 프로퍼티 검사
 */
let book2: Book = {
    name: "크기",
    price: 33000,
    //skill: "react"
}

let boo3: Book = proBook;

function func(book: Book){}

func({
    name: "크기",
    price: 33000,
    //skill: "react"
})

func(proBook);