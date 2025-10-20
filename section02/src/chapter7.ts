//void
//void -> 공허 -> 아무것도 없다, 아무것도 없음을 의미하는 타입

function func1():string {
    return "Hello";
}

function func2():void {
    console.log("Hello");
}

let a: void;
a = undefined; //undefined만 가능

//never
//never -> 존재하지 않는, 불가능한 타입

function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}
let b: never; // 아무것도 담을 수 없음