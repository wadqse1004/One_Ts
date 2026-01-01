/**
 *  대수 타입
 *  -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 *  -> 합집합 타입과 교집합 타입이 존재합니다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hi";

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name : string;
    color : string;
}

type Person = {
    namne : string;
    language : string;
};

type Union1 = Dog | Person;

let union1 : Union1 = {
    name : "",
    color: "",
}

let union2 : Union1 = {
    namne : "",
    language : "",
}

let union3 : Union1 = {
    name : "",
    color : "",
    language : "",
}

// 교집합만 있으면 불가능
//let union4 : Union1 = {
//    name : "",
//
//}

/**
 * 2. 교집합 타입 - Intersection 타입
 */

// number랑 string은 교집합이 없으므로 variable 변수의 타입은 never로 표시
let variable: number & string;

type Dog2 = {
    name : string;
    color : string;
}

type Person2 = {
    name : string;
    language : string;
};

type Intersection = Dog2 & Person2;

let Intersection1 : Intersection = {
    name : "",
    color : "",
    language : ""
};